import { createEffect } from "solid-js";

const DarkModeToggle = () => {
	const toggleDarkMode = () => {
		document.documentElement.classList.toggle("dark");
	};

	createEffect(() => {
		const darkToggleCheckbox = document.querySelector(
			"input[type='checkbox']#dark-toggle"
		);

		if (darkToggleCheckbox) {
			darkToggleCheckbox.addEventListener("click", toggleDarkMode);
		}
	});

	return (
		<>
			<style>
				{`
          input:checked ~ .dot {
            transform: translateX(100%);
          }
        `}
			</style>
			<div class="bg-white dark:bg-gray-900 min-h-screen w-full flex flex-row items-center">
				<label for="dark-toggle" class="items-center cursor-pointer">
					<div class="relative">
						<input
							type="checkbox"
							name="dark-mode"
							id="dark-toggle"
							class="checkbox hidden"
						/>
						<div class="block border-[1px] dark:border-customLight border-customDark w-14 h-8 rounded-full" />
						<div class="dot absolute left-1 top-1 dark:bg-customLight bg-customDark w-6 h-6 rounded-full transition" />
					</div>
				</label>
			</div>
		</>
	);
};

export default DarkModeToggle;
