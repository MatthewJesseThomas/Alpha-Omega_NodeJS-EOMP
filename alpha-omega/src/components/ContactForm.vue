<template>
	<div class="ContactForm">
		<div class="container">
			<form action="https://formspree.io/f/xdojwaqg" onsubmit="return validateForm()" method="POST" target="_blank">~

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name..">

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name..">

    <label for="country">Town</label>
    <select id="country" name="country">
      <option value="town">Cape Town</option>
      <option value="town">Paarl</option>
      <option value="town">Sea Point</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

    <input type="submit" value="Submit">

  </form>
</div>
	</div>
</template>
<script>
export default{
	// eslint-disable-next-line vue/multi-word-component-names
	name:'ContactForm'
}

</script>