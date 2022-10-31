export default async function uploadImage(event, setFileSrc, inputName) {
  event.preventDefault();
  const form = event.currentTarget;
  const fileInput = Array.from(form.elements).find(
    ({ name }) => name === inputName
  );
  const formData = new FormData();
  for (const file of fileInput.files) {
    formData.append("file", file);
  }
  formData.append("upload_preset", "my-uploads");
  const data = await fetch(
    "https://api.cloudinary.com/v1_1/simply-sites1/image/upload",
    {
      method: "POST",
      body: formData,
    }
  ).then((r) => r.json());

  setFileSrc(data.secure_url);
}
