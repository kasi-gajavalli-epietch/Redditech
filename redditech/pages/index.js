import React from 'react';
import Header from '../components/Header';

import Navbar from '../components/Navbar'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'

function index() {
  return (
    <div className="flex bg-blue-lightest flex-col font-sans min-h-screen">
		<Header />
		<div className="mt-12">
			<div className="bg-white mb-3">
				<div className="container mx-auto">
					<Navbar/>
				</div>
			</div>
			<div className="container mx-auto">
				<div className="flex w-960 mx-auto">
					<div className="w-2/3">
						<div className="py-2">
							<Post/>
						</div>
					</div>
					<Sidebar/>
				</div>
			</div>
		</div>
	</div>
  )
}

export default index