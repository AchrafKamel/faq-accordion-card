<script>
	import Illustration from '$components/illustration.svelte';
	import Question from '$components/Question.svelte';

	let index = 0;
	let openOneQuestion = ({ target }) => {
		index = target.open ? index : 0;
	};
</script>

<div
	class="w-screen h-screen font-Kumbh grid place-items-center bg-gradient-to-b from-SoftViolet to-SoftBlue"
>
	<div class="w-11/12 h-fit rounded-2xl bg-white flex flex-col md:flex-row md:w-4/6">
		<Illustration />
		<div class="px-10 pb-9 md:w-1/2 md:self-end">
			<h1 class="text-4xl font-bold text-VeryDarkDesaturatedBlue text-center md:text-left py-11">
				FAQ
			</h1>
			<Question
				question="How many team members can I invite?"
				answer="You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
			/>
			<Question
				question="What is the maximum file upload size?"
				answer="No more than 2GB. All files in your account must fit your allotted storage space."
			/>
			<Question
				question="How do I reset my password?"
				answer="Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
			/>
			<Question
				question="Can I cancel my subscription?"
				answer="Yes! Send us a message and we'll process your request no questions asked."
			/>
			<Question
				question="Do you provide additional support?"
				answer="Chat and email support is available 24/7. Phone lines are open during normal business hours."
			/>
		</div>
	</div>
</div>
