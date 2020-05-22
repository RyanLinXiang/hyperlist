const connectAPI = async (extension, type, data = "") => {
  const url = "https://awacademy-kleinanzeigen.azurewebsites.net/" + extension;

  const dataobj = {
    method: type,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    dataobj.body = JSON.stringify(data);
  }
  const response = await fetch(url, dataobj);

  return response.json();
};

export default connectAPI;
