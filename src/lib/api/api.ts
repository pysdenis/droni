const BASE_URL = 'http://localhost:8000'; // upravit a vymyslet, tak aby fungovalo lokálně i pak na serveru

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function fetchData(endpoint: string, value?: unknown) {
	const response = await fetch(`${BASE_URL}/${endpoint}.php/${value ?? ' '}`);
	return await response.json();
}

export async function postData(
	endpoint: string,
	data: Record<string, unknown>
): Promise<Record<string, unknown>> {
	const response = await fetch(`${BASE_URL}/api/${endpoint}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	return await response.json();
}

//test
export interface Article {
	id: number;
	title: string;
	createdAt?: Date;
	publishedAt?: Date;
	categoryId?: number;
	authorId?: number;
	image?: string;
	content: string;
	perex?: string;
	urlSlug?: string;
}
