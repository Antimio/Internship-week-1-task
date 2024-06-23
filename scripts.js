document.addEventListener("DOMContentLoaded", () => {
  const markAllReadButton = document.querySelector(".mark-all-read");
  const notificationCount = document.querySelector(".notification-count");
  const notifications = document.querySelectorAll(".notification");

  markAllReadButton.addEventListener("click", () => {
    notifications.forEach((notification) => {
      notification.classList.remove("unread");
    });
    notificationCount.textContent = "0";
  });
});
