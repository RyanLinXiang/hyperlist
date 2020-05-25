const connectAPI = async (extension, type, data = "") => {
  const url = "https://awacademy-kleinanzeigen.azurewebsites.net/" + extension;

  console.log(type,extension, data)
  
  const dataobj = {
    method: type,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    dataobj.body = JSON.stringify(data);
  }
  console.log('Hello',dataobj)
  const response = await fetch(url, dataobj);

  return response.json();
};

export default connectAPI;
