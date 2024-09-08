document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const bodyPart = urlParams.get('part');
    const bodyPartElement = document.getElementById('body-part');
    const exerciseList = document.getElementById('exercise-list');

    bodyPartElement.textContent = bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1);

    // Exercise data
    const exercises = {

        shoulders: [
            { name: 'SHOULDER PRESS', video: 'videos/shoulder-press.mp4' },
            { name: 'LATERAL RASIE', video: 'videos/lateral-raise.mp4' },
            { name: 'FRONT RASIE', video: 'videos/front-raise.mp4' },
            { name: 'FACE PULLS', video: 'videos/face-pulls.mp4' }
        ],
        chest: [
            { name: 'FLAT BENCH', video: 'videos/flat-bench.mp4' },
            { name: 'CHEST PRESS', video: 'videos/chest-press.mp4' },
            { name: 'PEC DEC FLY', video: 'videos/pec-dec-fly.mp4' },
            { name: 'INCLINE BENCH', video: 'videos/incline-bench.mp4' },
            { name: 'HIGH TO LOW FLY', video: 'videos/high-to-low-fly.mp4' }
        ],
        biceps: [
            { name: 'BARBELL CURL', video: 'videos/barbell-curl.mp4' },
            { name: 'PRECHER CURL', video: 'videos/precher-curl.mp4' },
            { name: 'DUMBELL CURL', video: 'videos/dumbell-curl.mp4' },
            { name: 'CONCENTRATION CURL', video: 'videos/concentration-curl.mp4' },
            { name: 'HAMMER CURL', video: 'videos/hammer-curl.mp4' }
        ],
        abs: [
            { name: 'CRUNCHES', video: 'videos/crunches.mp4' },
            { name: 'REVERSE CRUNCHES', video: 'videos/reverse-crunches.mp4' },
            { name: 'PLANK', video: 'videos/plank.mp4' },
            { name: 'RUSSIAN TWIST', video: 'videos/russian-twist.mp4' },
            { name: 'FLUTTER KICKS', video: 'videos/flutter-kick.mp4' }
        ],
        back: [
            { name: 'PULL UPS', video: 'videos/pull-ups.mp4' },
            { name: 'OVERHEAD EXTENSION', video: 'videos/overhead-extension.mp4' },
            { name: 'BARBELL ROW', video: 'videos/barbell-row.mp4' },
            { name: 'LAT PULLDOWN', video: 'videos/lat-pulldown.mp4' },
            { name: 'SEATED ROWS', video: 'videos/seated-rows.mp4' }
            
        ],
        legs: [
            { name: 'SQUATS', video: 'videos/squats.mp4' },
            { name: 'LUNGES', video: 'videos/lunges.mp4' },
            { name: 'LEG PRESS', video: 'videos/leg-press.mp4' },
            { name: 'LEG EXTENSION', video: 'videos/leg-extension.mp4' },
            { name: 'CALF RAISES', video: 'videos/calf-raises.mp4' }
          
        ],
        triceps: [
            { name: 'CLOSE GRIP BENCH', video: 'videos/close-grip-bench.mp4' },
            { name: 'TRICEPS PUSHDOWN', video: 'videos/triceps-pushdown.mp4' },
            { name: 'OVERHEAD EXTENSION', video: 'videos/overhead-extension.mp4' },
            { name: 'CLOSE GRIP PUSHUPS', video: 'videos/close-grip-pushups.mp4' }
        ]
    };

    const selectedExercises = exercises[bodyPart]; 

    if (selectedExercises) {
        selectedExercises.forEach(exercise => {
            const exerciseItem = document.createElement('div');
            exerciseItem.classList.add('exercise-item');

            const videoElement = document.createElement('video');
            videoElement.setAttribute('controls', '');
            videoElement.src = exercise.video;

            const nameElement = document.createElement('h3');
            nameElement.textContent = exercise.name;

            exerciseItem.appendChild(nameElement);
            exerciseItem.appendChild(videoElement);

            exerciseList.appendChild(exerciseItem);
        });
    } else {
        exerciseList.innerHTML = '<p>No exercises found for this body part.</p>';
    }
});

