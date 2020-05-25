export default {
  status: { error: false, message: false },
  formContents: [
    {
      type: "input",
      id: "title",
      label: "Title",
      placeholder: "enter the title (max 80 characters long)",
      icons: false,
      required: true,
      showForRegistered: true,
      value: false,
    },
    {
      type: "textarea",
      id: "description",
      label: "Description",
      placeholder: "description",
      required: true,
      showForRegistered: true,
      value: false,
    },
    {
      type: "input",
      id: "name",
      label: "Name",
      placeholder: "enter your name",
      icons: "fas fa-user",
      required: true,
      showForRegistered: false,
      value: false,
    },
    {
      type: "input",
      id: "location",
      label: "Location",
      placeholder: "enter your location",
      icons: "fas fa-map-marker-alt",
      required: true,
      showForRegistered: true,
      value: false,
    },
    {
      type: "input",
      id: "price",
      label: "Price",
      placeholder: "price - can be 0",
      icons: "fas fa-euro-sign",
      required: true,
      showForRegistered: true,
      value: false,
    },
    {
      type: "checkbox",
      id: "priceNegotiable",
      label: "Negotiable?",
      required: false,
      showForRegistered: true,
      value: false,
    },
    {
      type: "input",
      id: "email",
      label: "E-Mail",
      placeholder: "name@maxmuster.com",
      icons: "fas fa-envelope",
      required: true,
      showForRegistered: false,
      value: false,
    },
  ],
};
