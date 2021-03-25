console.log("Service Worker loaded");

self.addEventListener("push", (e) => {
  console.log("push recieved...");
  self.registration.showNotification("Starling", {
    body: "Notified by Vikranth",
    icon: "http://image.ibb.co/frYOFd/tmlogo.png",
  });
  console.log("service");
});
