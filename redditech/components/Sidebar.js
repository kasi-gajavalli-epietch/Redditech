import React from 'react'

const Sidebar = () => {
  return (
    <div className="w-1/3 ml-5">
						<div className="py-2">
							<div className="rounded bg-white mb-4">
								<div className="p-3">
									<div className="h-8 -m-3 bg-no-repeat bg-100%" >
									</div>
									<div>
										<div className="inline-flex items-center">
											<img src="https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png" className="h-16"></img>
											<span className="text-lg ml-4 mt-6">r/hot</span>
										</div>
										<p className="font-normal mb-3 text-sm leading-normal">The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.</p>
										<button className="bg-blue-dark text-sm text-white font-semibold rounded px-4 py-2 w-full">CREATE POST</button>
									</div>
								</div>
							</div>
							<div className="rounded bg-white mb-4">
								<div className="p-2">
									<div className="flex items-center">
										<svg className="h-6 w-6 mr-4 text-orange fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Reddit Premium</title><path d="M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"></path></svg>
										<div className="flex flex-col">
											<span className="text-xs font-medium text-black-alt mb-1">Reddit Premium</span>
											<span className="text-xxs font-normal">Ads-free browsing</span>
										</div>
										<div className="flex ml-auto">
											<button className="bg-orange text-xs text-white font-semibold rounded px-4 py-2 ml-auto">GET PREMIUM</button>
										</div>
									</div>
								</div>
							</div>
							<div className="rounded bg-white mb-4">
								<div className="p-3 text-xxs font-semibold w-full">TRENDING COMMUNITIES</div>
								<div className="pb-4">
									<div className="px-3 py-2">
										<div className="flex">
											<img className="h-8 w-8 border rounded-full mr-2" src="https://avatars0.githubusercontent.com/u/30317862?s=200&v=4"></img>
											<div className="flex flex-col font-medium">
												<a href="#" className="text-xs text-black-alt no-underline leading-tight">r/tailwind</a>
												<span className="text-xxs">1.000 subscribers</span>
											</div>
											<div className="flex ml-auto">
												<button className="bg-blue-dark text-xs text-white font-semibold rounded px-4 ml-auto">SUBSCRIBE</button>
											</div>
										</div>
									</div>
									<div className="px-3 py-2">
										<div className="flex">
											<img className="h-8 w-8 border rounded-full mr-2" src="https://avatars0.githubusercontent.com/u/30317862?s=200&v=4"></img>
											<div className="flex flex-col font-medium">
												<a href="#" className="text-xs text-black-alt no-underline leading-tight">r/tailwind</a>
												<span className="text-xxs">1.000 subscribers</span>
											</div>
											<div className="flex ml-auto">
												<button className="bg-blue-dark text-xs text-white font-semibold rounded px-4 ml-auto">SUBSCRIBE</button>
											</div>
										</div>
									</div>
									<div className="px-3 py-2">
										<div className="flex">
											<img className="h-8 w-8 border rounded-full mr-2" src="https://avatars0.githubusercontent.com/u/30317862?s=200&v=4"></img>
											<div className="flex flex-col font-medium">
												<a href="#" className="text-xs text-black-alt no-underline leading-tight">r/tailwind</a>
												<span className="text-xxs">1.000 subscribers</span>
											</div>
											<div className="flex ml-auto">
												<button className="bg-blue-dark text-xs text-white font-semibold rounded px-4 ml-auto">SUBSCRIBE</button>
											</div>
										</div>
									</div>
									<div className="px-3 py-2">
										<div className="flex">
											<img className="h-8 w-8 border rounded-full mr-2" src="https://avatars0.githubusercontent.com/u/30317862?s=200&v=4"></img>
											<div className="flex flex-col font-medium">
												<a href="#" className="text-xs text-black-alt no-underline leading-tight">r/tailwind</a>
												<span className="text-xxs">1.000 subscribers</span>
											</div>
											<div className="flex ml-auto">
												<button className="bg-blue-dark text-xs text-white font-semibold rounded px-4 ml-auto">SUBSCRIBE</button>
											</div>
										</div>
									</div>
									<div className="px-3 py-2">
										<div className="flex">
											<img className="h-8 w-8 border rounded-full mr-2" src="https://avatars0.githubusercontent.com/u/30317862?s=200&v=4"></img>
											<div className="flex flex-col font-medium">
												<a href="#" className="text-xs text-black-alt no-underline leading-tight">r/tailwind</a>
												<span className="text-xxs">1.000 subscribers</span>
											</div>
											<div className="flex ml-auto">
												<button className="bg-blue-dark text-xs text-white font-semibold rounded px-4 ml-auto">SUBSCRIBE</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="rounded bg-white mb-4">
								<div className="p-3">
									<div className="flex justify-between">
										<div>
											<a href="#" className="block text-black no-underline text-xs font-medium">About</a>
											<a href="#" className="block text-black no-underline text-xs font-medium">Careers</a>
											<a href="#" className="block text-black no-underline text-xs font-medium">Press</a>
										</div>
										<div>
											<a href="#" className="block text-black no-underline text-xs font-medium">Advertise</a>
											<a href="#" className="block text-black no-underline text-xs font-medium">Blog</a>
											<a href="#" className="block text-black no-underline text-xs font-medium">Help</a>
										</div>
										<div>
											<a href="#" className="block text-black no-underline text-xs font-medium">The Reddit App</a>
											<a href="#" className="block text-black no-underline text-xs font-medium">Reddit Coins</a>
											<a href="#" className="block text-black no-underline text-xs font-medium">Reddit Premium</a>
											<a href="#" className="block text-black no-underline text-xs font-medium">Reddit Gifts</a>
										</div>
									</div>
									<div className="text-center mt-6">
										<p className="text-xs text-black leading-tight font-medium">
											<a href="#" className="text-black no-underline">Content Policy</a> | <a href="#" className="text-black no-underline">Privacy Policy</a>
										</p>
										<p className="text-xs text-black leading-tight font-medium">
											<a href="#" className="text-black no-underline">User Agreement</a> | <a href="#" className="text-black no-underline">Mod Policy</a>
										</p>
										<p className="text-xs text-black leading-tight font-medium">© 2018 Reddit, Inc. All rights reserved</p>
									</div>
								</div>
							</div>
						</div>
					</div>
  )
}

export default Sidebar