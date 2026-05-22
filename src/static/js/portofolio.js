function showTab(tabName) {
  // Hide all contents
  document.querySelectorAll(".tab-content").forEach((el) => {
    el.classList.remove("block");
    el.classList.add("hidden");
  });

  // Reset all buttons styling
  document.querySelectorAll('[id^="tab-"]').forEach((el) => {
    el.classList.remove("text-white", "border-pink-500");
    el.classList.add("text-gray-400", "border-transparent");
  });

  // Show active content
  const activeContent = document.getElementById("content-" + tabName);
  if (activeContent) {
    activeContent.classList.remove("hidden");
    activeContent.classList.add("block");
  }

  // Highlight active button
  const activeButton = document.getElementById("tab-" + tabName);
  if (activeButton) {
    activeButton.classList.remove("text-gray-400", "border-transparent");
    activeButton.classList.add("text-white", "border-pink-500");
  }
}

function openProjectModal(title, desc, img, techStr, featuresStr, liveUrl, sourceUrl) {
  const projectModal = document.getElementById("project-modal");
  const modalContent = document.getElementById("project-modal-content");

  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-desc").innerText = desc;
  document.getElementById("modal-img").src = img;

  const techContainer = document.getElementById("modal-tech");
  techContainer.innerHTML = "";
  if (techStr) {
    techStr.split(",").forEach((tech) => {
      const span = document.createElement("span");
      span.className =
        "bg-gray-800 border border-gray-700 text-pink-400 px-3 py-1 rounded-full text-sm font-semibold";
      span.innerText = tech.trim();
      techContainer.appendChild(span);
    });
  }

  const featContainer = document.getElementById("modal-features");
  featContainer.innerHTML = "";
  if (featuresStr) {
    featuresStr.split("|").forEach((feat) => {
      const li = document.createElement("li");
      li.innerText = feat.trim();
      featContainer.appendChild(li);
    });
  }

  const liveBtn = document.getElementById("modal-live-btn");
  if (liveBtn) {
    if (liveUrl) {
      liveBtn.href = liveUrl;
      liveBtn.style.display = "inline-block";
    } else {
      liveBtn.style.display = "none";
    }
  }

  const sourceBtn = document.getElementById("modal-source-btn");
  if (sourceBtn) {
    if (sourceUrl) {
      sourceBtn.href = sourceUrl;
      sourceBtn.style.display = "inline-block";
    } else {
      sourceBtn.style.display = "none";
    }
  }

  projectModal.classList.remove("hidden");
  // Trigger reflow
  void projectModal.offsetWidth;
  projectModal.classList.remove("opacity-0");
  modalContent.classList.remove("scale-95");
  modalContent.classList.add("scale-100");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const projectModal = document.getElementById("project-modal");
  const modalContent = document.getElementById("project-modal-content");

  projectModal.classList.add("opacity-0");
  modalContent.classList.remove("scale-100");
  modalContent.classList.add("scale-95");

  setTimeout(() => {
    projectModal.classList.add("hidden");
    document.body.style.overflow = "";
  }, 300);
}

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
});

function openExperienceModal(title, desc, img) {
  const expModal = document.getElementById("experience-modal");
  const modalContent = document.getElementById("experience-modal-content");

  document.getElementById("exp-modal-title").innerText = title;
  document.getElementById("exp-modal-desc").innerText = desc;
  document.getElementById("exp-modal-img").src = img;

  expModal.classList.remove("hidden");
  // Trigger reflow
  void expModal.offsetWidth;
  expModal.classList.remove("opacity-0");
  modalContent.classList.remove("scale-95");
  modalContent.classList.add("scale-100");
  document.body.style.overflow = "hidden";
}

function closeExperienceModal() {
  const expModal = document.getElementById("experience-modal");
  const modalContent = document.getElementById("experience-modal-content");

  expModal.classList.add("opacity-0");
  modalContent.classList.remove("scale-100");
  modalContent.classList.add("scale-95");

  setTimeout(() => {
    expModal.classList.add("hidden");
    document.body.style.overflow = "";
  }, 300);
}
