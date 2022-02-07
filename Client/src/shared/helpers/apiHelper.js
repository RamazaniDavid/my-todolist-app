export const ApiHelper = async (url, method = "GET", data) => {
  //let bearer = "Bearer " + localStorage.getItem("user_token");

  const response = await fetch(url, {
    method: method,

    //withCredentials: true,
    headers: {
      //Authorization: bearer,
      "X-FP-API-KEY": "chaptoken",
      "Content-Type": "application/json",
    },
    ...(data && { body: JSON.stringify(data) }),
  }).catch((err) => {
    console.log(err);
    throw new Error(err);
  });

  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json;
};

export function AnyOtherHelper() {
  return "i am from helper function";
}
