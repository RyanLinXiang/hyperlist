const connectAPI = async (extension, type, data = "", token = false) => {
  const url = "https://awacademy-kleinanzeigen.azurewebsites.net/" + extension;

  console.log(type,extension, data)
  
  const dataobj = {
    method: type,
    headers: {
      "Content-Type": "application/json",
    },
  };

<<<<<<< HEAD
  if (token) dataobj.headers["Authorization"] = `Bearer ${token}`;

  if (data) dataobj.body = JSON.stringify(data);

||||||| merged common ancestors
  if (data) {
    dataobj.body = JSON.stringify(data);
  }
=======
  if (data) {
    dataobj.body = JSON.stringify(data);
  }
  console.log('Hello',dataobj)
>>>>>>> origin/ricky
  const response = await fetch(url, dataobj);

  return response.statusText === "No Content" ? {} : response.json();
};

export default connectAPI;
