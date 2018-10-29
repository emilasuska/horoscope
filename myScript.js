function daysInMonth(month) {
    return [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ][month - 1];
}

function generateDays() {
    var monthBox = document.getElementById("monthBox");
    var dayBox = document.getElementById("dayBox");

    var month = monthBox.selectedIndex;
    var days = daysInMonth(month);

    // clear all days from dayBox
    dayBox.innerHTML = "";

    // add a prompt
    var prompt = document.createElement("option");
    prompt.innerText = "Select Day";
    dayBox.appendChild(prompt);

    // add all the days of the month
    for (var day = 1; day <= days; day++) {
        var dayOption = document.createElement("option");
        dayOption.innerText = day.toString();
        dayBox.appendChild(dayOption);
    }
}

function generateHoroscope() {
    // get all user input
    var name = document.getElementById("nameBox").value;
    var month = document.getElementById("monthBox").selectedIndex;
    var day = document.getElementById("dayBox").selectedIndex;

    // check the user's input
    if (month <= 0) {
        alert("Please select your birth month. ");
        return;
    }
    if (day <= 0) {
        alert("Please select your birth day.");
        return;
    }

    // display optional greeting
    var greeting = "";
    if (name != "") {
        greeting = "Hello " + name + "!";
    }
    document.getElementById("greeting").innerText = greeting;

    // get the user's sign based on birth day
    var sign = getSign(month, day);

    // fill-in all information
    document.getElementById("sign").innerText = sign.name;
    document.getElementById("emoji").innerText = sign.emoji;
    document.getElementById("horoscope").innerText = sign.horoscope;
    document.getElementById("image").setAttribute("src", "img/images/" + sign.name + ".png");
    document.getElementById("symbol").setAttribute("src", "img/symbols/" + sign.name + ".svg");
    document.getElementById("constellation").setAttribute("src", "img/constellations/" + sign.name + ".png");

    // un-hide results
    document.getElementById("result1").removeAttribute("hidden");
    document.getElementById("result2").removeAttribute("hidden");
}

function getSign(month, day) {
    var table = [
        { month: 1, endDay: 19, name: "Capricorn", emoji: "♑️", horoscope:
                "You are very curious and independent. Keep your eye out for an opportunity soon."
        },
        { month: 2, endDay: 18, name: "Aquarius", emoji: "♒️" , horoscope:
                "You have a creative mindset and are very imaginative. Your great problem solving skills are always needed."
        },
        { month: 3, endDay: 20, name: "Pisces", emoji: "♓️" , horoscope:
                "You are extremely caring for those around you. You are a great friend and companion. Remember what is most important to you."
        },
        { month: 4, endDay: 19, name: "Aries", emoji: "♈️" , horoscope:
                "Your competitive edge always pushes you to preform your best. Try not to control everything in your life."
        },
        { month: 5, endDay: 20, name: "Taurus", emoji: "♉️" , horoscope:
                "You are very reliable and a strong person. A pleasant surprise awaits you."
        },
        { month: 6, endDay: 20, name: "Gemini", emoji: "♊️" , horoscope:
                "You are good at expressing your emotions. All your hard work will soon pay off."
        },
        { month: 7, endDay: 22, name: "Cancer", emoji: "♋️" , horoscope:
                "You have a great intuition and are compassionate. Believe in yourself and others will too."
        },
        { month: 8, endDay: 22, name: "Leo", emoji: "♌️" , horoscope:
                "You can be dramatic but are also very assertive. Listen to those around you, good news is coming soon."
        },
        { month: 9, endDay: 22, name: "Virgo", emoji: "♍️" , horoscope:
                "You are loyal and have a gentle personality. You are admired by others."
        },
        { month: 10, endDay: 22, name: "Libra", emoji: "♎️" , horoscope:
                "Your gracious and social personality will attract a new person in your life."
        },
        { month: 11, endDay: 21, name: "Scorpio", emoji: "♏️" , horoscope:
                "You are passionate and resourceful. You are talented in many ways."
        },
        { month: 12, endDay: 21, name: "Sagittarius", emoji: "♐️" , horoscope:
                "You are optimistic and generous. Your difficulties will strengthen you."
        },
    ];

    // find the sign based on the end date
    for (var i = 0; i < table.length; i++) {
        var entry = table[i];
        if (month < entry.month || (month <= entry.month && day <= entry.endDay)) {
            return entry;
        }
    }

    // must be Capricorn in December
    return table[0];
}
