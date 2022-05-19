const data = [
  {
    name: "John Doe",
    age: 32,
    gender: "male",
    lookingFor: "female",
    location: "Miami",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Will Smith",
    age: 29,
    gendger: "male",
    lookingFor: "female",
    location: "New York",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Anna Marie",
    age: 32,
    gender: "female",
    lookingFor: "male",
    location: "Canada",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Billly Kid",
    age: 30,
    gender: "male",
    lookingFor: "female",
    location: "San Franscisco",
    image: "https://randomuser.me/api/portraits/men/79.jpg",
  },
  {
    name: "Jaenny Williams",
    age: 27,
    gender: "female",
    lookingFor: "male",
    location: "Abu Dabi",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Hanna Jon",
    age: 27,
    gender: "female",
    lookingFor: "male",
    location: "Nairobi",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];

const profiles = profileIterator(data);

/**
 * next event listener
 */

document.getElementById("next").addEventListener("click", nextProfile);

/**
 * call first profile
 */
nextProfile();

/**
 * Profile display
 */
function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile !== undefined) {
    document.getElementById("profileDisplay").innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
    </ul>
    `;
    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    // no more profiles
    window.location.reload();
  }
}

/**
 * profile iterator
 */

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
