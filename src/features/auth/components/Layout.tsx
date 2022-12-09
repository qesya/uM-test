import { Head } from '@/components/Head';

type LayoutProps = {
	children: React.ReactNode;
	title: string;
};

export const Layout = ({ children, title }: LayoutProps) => {
	return (
		<>
			<Head title={title} />
			<section className='text-gray-600 body-font h-full md:h-screen justify-center items-center'>
				<div className='flex px-5 items-center justify-center flex-col h-full'>
					{children}
				</div>
			</section>
		</>
	);
};
