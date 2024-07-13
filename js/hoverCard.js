document.querySelectorAll(".div-to-replace").forEach((card) => {
	const commonDiv = document.createElement("div");
	commonDiv.className = "common-content";
	commonDiv.innerHTML = `
        <div
						class="text-center"
						style="
							color: white;
							background-color: var(--red);
							border-radius: 5px;
							height: 526px;
							width: 370px;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
						"
					>
						<img
							src="assets/dev-icon.png"
							alt=""
							style="object-fit: contain"
							width="58px"
							height="58px"
						/>
						<p style="font-size: 24px; font-weight: 400; padding-top: 36px">
							WEB DEVELOPMENT
						</p>
						<p style="font-size: 16px">
							Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
							Pellentesque
						</p>
						<button style="border: 0px; margin-top: 54px">
							<a
								href="https://fylehq.com"
								target="_blank"
								style="
									padding: 15px 20px 15px 20px;
									text-decoration: none;
									color: var(--red);
									font-size: 14px;
									font-weight: 500;
									display: flex;
									justify-content: center;
									align-items: center;
									gap: 10px;
								"
								>READ MORE
								<img
									src="assets/arrow.png"
									style="object-fit: contain; width: 37px"
									alt=""
								/>
							</a>
						</button>
					</div>
    `;
	card.appendChild(commonDiv);
});
