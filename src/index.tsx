import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import {
	ArticleParamsForm,
	ArticleParamsFormState,
} from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [pageStyle, setPageStyle] = useState({
		'--font-family': defaultArticleState.fontFamilyOption.value,
		'--font-size': defaultArticleState.fontSizeOption.value,
		'--font-color': defaultArticleState.fontColor.value,
		'--container-width': defaultArticleState.contentWidth.value,
		'--bg-color': defaultArticleState.backgroundColor.value,
	});

	return (
		<main className={clsx(styles.main)} style={pageStyle as CSSProperties}>
			<ArticleParamsForm
				onApply={(state: ArticleParamsFormState) => {
					setPageStyle({
						'--font-family': state.fontFamily.value,
						'--font-size': state.fontSize.value,
						'--font-color': state.fontColor.value,
						'--container-width': state.contentWidth.value,
						'--bg-color': state.backgroundColor.value,
					});
				}}
			/>
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
