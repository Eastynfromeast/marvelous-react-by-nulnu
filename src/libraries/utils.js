export const createImageURL = data => {
	return data.path + "." + data.extension;
};

export const fetchData = async url => {
	const json = await (await fetch(url)).json();
	return json;
};
