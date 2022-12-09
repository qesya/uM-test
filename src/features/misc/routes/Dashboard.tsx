import avatarImg from '@/assets/avatar.png';
import { Navbar, Spinner } from '@/components/Elements';
import { useMyInfo } from '@/hooks/useMyInfo';

export const Dashboard = () => {
	const { user, isLoading } = useMyInfo();

	if (isLoading)
		return (
			<div className='flex flex-col w-full h-screen justify-center items-center'>
				<Spinner variant='light' />
			</div>
		);
	return (
		<div>
			<Navbar hideMenu={false} />
			<section className='text-gray-600 body-font -mt-8'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-wrap -m-4 justify-center'>
						<div className='w-full md:w-1/3 lg:w-1/3 lg:mb-0 mb-6 p-4'>
							<div className='h-full text-center'>
								<img
									alt='testimonial'
									className='w-32 h-32 mb-8 object-cover object-center rounded-full inline-block bg-gray-100'
									src={avatarImg}
								/>
								<div className='flex flex-col w-8/12 mx-auto'>
									<table className=''>
										<tbody>
											<tr>
												<th className='text-left'>Firstname</th>
												<td className='text-left'>: {user?.firstName}</td>
											</tr>
											<tr>
												<th className='text-left'>Lastname</th>
												<td className='text-left'>: {user?.lastName}</td>
											</tr>
											<tr>
												<th className='text-left'>Email</th>
												<td className='text-left'>: {user?.email}</td>
											</tr>
											<tr>
												<th className='text-left'>Address Line 1</th>
												<td className='text-left'>
													: {user?.address_line_1}
												</td>
											</tr>
											<tr>
												<th className='text-left'>Address Line 2</th>
												<td className='text-left'>
													:{' '}
													{user?.address_line_2 === null
														? user.address_line_2
														: '-'}
												</td>
											</tr>
											<tr>
												<th className='text-left'>City</th>
												<td className='text-left'>: {user?.city}</td>
											</tr>
											<tr>
												<th className='text-left'>Postcode</th>
												<td className='text-left'>: {user?.postcode}</td>
											</tr>
										</tbody>
									</table>
								</div>
								<span className='inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4'></span>
								<h2 className='text-gray-900 font-medium title-font tracking-wider text-sm'>
									Made with ❤️ & 🎵
								</h2>
								<p className='text-gray-500'>By: Pasquale Palena</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
