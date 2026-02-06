
async function apiTemplate(
    url:string, 
    params:string
){

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/${url}?${params}`;

    const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    
  console.log("apiUrl", apiUrl);

  if(!response.ok){
    throw new Error(`Error! status: ${response.status}`);
  }
    const result = await response.json();
    return result;
}

export function getPages(number:string){
    return apiTemplate(
      "pages",
      `pagination[page]=${number}&pagination[pageSize]=10`,
    );
}

export function getPageBySlug(slug:string){
    return apiTemplate(
      `pages`,
      `filters[slug][$eq]=${slug}`,
    );
}