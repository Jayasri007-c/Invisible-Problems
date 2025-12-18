const data = {
  ewaste: {
    title: "E-Waste",
    description:
      "Improper disposal of electronics releases toxic chemicals that harm soil, water, and human health.",
    solutions: [
      "Recycle electronics responsibly",
      "Avoid frequent upgrades",
      "Support certified e-waste programs"
    ]
  },
  digital: {
    title: "Digital Addiction",
    description:
      "Excessive screen usage affects attention span, sleep, and mental well-being.",
    solutions: [
      "Set daily screen-time limits",
      "Take regular offline breaks",
      "Encourage real-world activities"
    ]
  },
  food: {
    title: "Food Wastage",
    description:
      "Huge quantities of edible food are wasted every day while millions lack basic nutrition.",
    solutions: [
      "Plan meals mindfully",
      "Donate surplus food",
      "Avoid over-purchasing"
    ]
  }
};

function openModal(key) {
  document.getElementById("modal-title").innerText = data[key].title;
  document.getElementById("modal-description").innerText = data[key].description;

  const list = document.getElementById("modal-solutions");
  list.innerHTML = "";
  data[key].solutions.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });

  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
