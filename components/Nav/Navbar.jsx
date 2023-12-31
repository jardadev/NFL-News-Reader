import Link from 'next/link';
import { BsSearch } from 'react-icons/bs';
import TeamNavList from './TeamNavList';

const Navbar = () => {
	// useEffect(() => {
	// 	themeChange(false);
	// }, []);

	return (
		<nav className='bg-base-200 backdrop-filter bg-opacity-20 backdrop-blur-lg sticky top-0 z-[20] border-b border-gray-500 py-2 justify-center w-full'>
			<div className='flex items-center justify-between gap-3 mx-auto max-w-xl px-2 xl:max-w-full xl:px-32'>
				<div className='w-fit'>
					<input
						id='my-drawer-3'
						type='checkbox'
						className='drawer-toggle'
					/>
					{/* Navbar */}
					<div>
						<label
							htmlFor='my-drawer-3'
							className='btn btn-square btn-ghost'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								className='inline-block w-6 h-6 xl:w-8 xl:h-8 stroke-current'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h16M4 18h16'
								></path>
							</svg>
						</label>
					</div>
					{/* Drawer content */}
					<div className='drawer-side'>
						<label
							htmlFor='my-drawer-3'
							className='drawer-overlay'
						></label>
						<TeamNavList />
					</div>
				</div>
				<div className='cursor-pointer'>
					<Link href={'/'} className='text-2xl xl:text-4xl'>
						NFL News 🏈
					</Link>
				</div>
				<div className='xlg:hidden btn btn-square btn-ghost'>
					<BsSearch className='w-6 h-6 xl:w-8 xl:h-8 inline-block' />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
