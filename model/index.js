const express = require("express");
const router = express.Router();
const con = require('../config/index.js');
const { hash, compare, hashSync } = require('bcrypt');
const { createToken } = require('../middleware/AuthenticateUser.js');

// User Functionality...
class User {
    login(req, res) {
        const { emailAdd, user_password } = req.body;
        const strQry =
        `SELECT user_id, firstName, lastName, gender, cellphoneNumber, emailAdd, user_password, userRole, userProfile, joinDate
        FROM Users
        WHERE emailAdd = '${emailAdd}';`;
        con.query(strQry, async (err, data) => {
            if (err) throw err;
            if ((!data.length) || (data == null)) {
                res.status(401).json({
                    err:
                        "You Have Provided A Invalid Email Address!!!"
                });
            } else {
                await compare(user_password,
                    data[0].user_password,
                    (cErr, cResult) => {
                        if (cErr) throw cErr;
                        // Create a token
                        const jwToken =
                            createToken(
                                {
                                    emailAdd, user_password
                                }
                            );
                        // Saving
                        res.cookie('LegitUser',
                            jwToken, {
                            maxAge: 3600000,
                            httpOnly: true
                        })
                        if (cResult) {
                            res.status(200).json({
                                msg: 'Logged in',
                                jwToken,
                                result: data[0]
                            })
                        } else {
                            res.status(401).json({
                                err: 'You Entered An Invalid Password Or Have Not Registered Yet. '
                            })
                        }
                    })
            }
        })
    }
    fetchUsers(req, res) {
        const strQry =
        `SELECT user_id, firstName, lastName, gender, cellphoneNumber, emailAdd, user_password, userRole, userProfile, joinDate
         FROM Users;`;
        //db
        con.query(strQry, (err, data) => {
            if (err) throw err;
            else res.status(200).json(
                { results: data });
        })
    }
    fetchUser(req, res) {
        const strQry =
            `
            SELECT user_id, firstName, lastName, gender, cellphoneNumber, emailAdd, user_password, userRole, userProfile, joinDate
            FROM Users
        WHERE user_id = ?;
        `;
        //db
        con.query(strQry, [req.params.id],
            (err, data) => {
                if (err) throw err;
                else res.status(200).json(
                    { results: data });
            })

    }
    async createUser(req, res) {
        // Payload
        let userDetails = req.body;
        // Hashing user password
        userDetails.user_password = await
            hash(userDetails.user_password, 15);
        // This information will be used for authentication.
        let user = {
            emailAdd: userDetails.emailAdd,
            user_password: userDetails.user_password
        }
        // sql query
        const strQry =
        `INSERT INTO Users
        SET ?;`;
        con.query(strQry, [userDetails], (err) => {
            if (err) {
                res.status(401).json({ err });
            } else {
                // Create a token
                const jwToken = createToken(user);
                // This token will be saved in the cookie. 
                // The duration is in milliseconds.
                res.cookie("LegitUser", jwToken, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                res.status(200).json({ msg: "A New User Record was Created & Saved." })
            }
        })
    }
    updateUser(req, res) {
        let data = req.body;
        // console.log(data);
        // console.log(req.params.id)
        // if (data.user_password !== null ||
        //     data.user_password !== undefined) data.user_password = hashSync(data.user_password, 15);
        const strQry =
        `UPDATE Users SET ? WHERE user_id = ?;`;
        //db
        con.query(strQry, [data, req.params.id],
            (err) => {
                if (err) console.log(err);
                else res.status(200).json({
                    msg:
                        "A Row Was Affected"
                });
            })
    }
    deleteUser(req, res) {
        const strQry =
            `
        DELETE FROM Users
        WHERE user_id = ?;
        `;
        //db
        con.query(strQry, [req.params.id],
            (err) => {
                if (err) throw err;
                res.status(200).json({
                    msg:
                        "A User Record Was Removed From Our DataBase..."
                });
            })
    }
}
// <==================================================>
// Products Functionality...
class Product {
    fetchProducts(req, res) {
        const strQry = `SELECT *
        FROM Products;`;
        con.query(strQry, (err, results) => {
            if (err) throw err;
            res.status(200).json({ results: results })
        });
    }
    fetchProduct(req, res) {
        const strQry = `SELECT *
        FROM Products
        WHERE product_id = ?;`;
        con.query(strQry, [req.params.id], (err, results) => {
            if (err) throw err;
            res.status(200).json({ results: results });
        });

    }
    addProduct(req, res) {
        const strQry =
        `INSERT INTO Products SET ?;
        `;
        con.query(strQry, [req.body, req.params.id],
            (err) => {
                if (err) {
                    res.status(400).json({ err: "Unable to Insert Into a New Record." });
                } else {
                    res.status(200).json({ msg: "Product saved!!!" });
                }
            }
        );
    }
    updateProduct(req, res) {
        const strQry =
        `UPDATE Products SET ? WHERE product_id = ?;`;
        con.query(strQry, [req.body, req.params.id],
            (err) => {
                if (err) {
                    res.status(400).json({err});
                } else {
                    res.status(200).json({ msg: "Product Details Updated." });
                }
            }
        );

    }
    deleteProduct(req, res) {
        const strQry =
            `
        DELETE FROM Products
        WHERE product_id = ?;
        `;
        con.query(strQry, [req.params.id], (err) => {
            if (err) res.status(400).json({ err: "The record was not found." });
            res.status(200).json({ msg: "A Product Was Deleted." });
        })
    }

}
// Export User class
module.exports = {
    User,
    Product
}
