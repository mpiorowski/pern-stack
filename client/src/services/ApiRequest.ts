export const apiRequest = async (options: any) => {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  const response = await fetch(options.url, options);
    if (response.ok) {
        return response.json();
    }
    else {
        return Promise.reject(response);
    }
};
