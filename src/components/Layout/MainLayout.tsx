export type MainLayoutProps = {
	children: React.ReactNode;
};

export const MainLayout = (props: MainLayoutProps) => {
	const { children } = props;
	return <div>{children}</div>;
};
