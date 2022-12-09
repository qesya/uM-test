import { Helmet } from 'react-helmet-async';

type HeadProps = {
	title?: string;
	description?: string;
};

export const Head = (props: HeadProps = {}) => {
	const { title = '', description = '' } = props;
	return (
		<Helmet title={title ? `${title} | RAB` : undefined} defaultTitle='RAB'>
			<meta name='description' content={description} />
		</Helmet>
	);
};
