        // ====== EMAILJS CONFIGURATION ======
        // You need to sign up at https://www.emailjs.com and get your credentials
        const EMAILJS_CONFIG = {
            service_id: 'service_yap2gp7',
            template_id: 'template_vqubt3h',
            user_id: 'jcttjV8Qn420Tryix'
        };

        const DEVELOPER_EMAIL = 'lemanuelneuro@gmail.com';

        // ====== APPLICATION DATA ======
        const CORRECT_USERNAME = "Asikh";
        const CORRECT_PASSWORD = "Umulkhisa@37";

        const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const DAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const SUBJECTS_BY_DAY = {
            0: ['Mathematics', 'English', 'CRE', 'Computer Studies'],
            1: ['Physics', 'Kiswahili', 'Biology', 'Computer Studies'],
            2: ['Chemistry', 'English', 'Mathematics', 'CRE'],
            3: ['Biology', 'Physics', 'Kiswahili', 'Computer Studies'],
            4: ['Mathematics', 'Chemistry', 'English', 'CRE'],
            5: ['Physics', 'Biology', 'Computer Studies', 'Kiswahili'],
            6: ['Chemistry', 'Mathematics', 'English', 'CRE']
        };

        const SCHEDULE_TEMPLATE = [
            {
                time: "5:00 AM",
                activity: "Wake up & Tahajjud Prayer",
                category: "prayer",
                details: "Start the day with prayer and spiritual reflection. Recommended: Drink a glass of water first.",
                duration: 30,
                importance: "high",
                tips: "Set alarm 5 minutes early to allow for waking up gently.",
                notes: "Consistency in waking up at this time helps regulate your circadian rhythm."
            },
            {
                time: "5:30 AM",
                activity: "Fajr Prayer",
                category: "prayer",
                details: "Morning prayer with family. Focus on mindfulness and intention.",
                duration: 15,
                importance: "high",
                tips: "Perform wudu calmly and mindfully.",
                notes: "This prayer sets the tone for the entire day."
            },
            {
                time: "5:45 AM",
                activity: "Qur'an Reading & Reflection",
                category: "personal",
                details: "30 minutes of Quranic recitation and reflection. Suggested: 1-2 pages with translation.",
                duration: 30,
                importance: "medium",
                tips: "Choose a comfortable, well-lit spot for reading.",
                notes: "Morning is the best time for retention and focus."
            },
            {
                time: "6:15 AM",
                activity: "Breakfast Preparation",
                category: "family",
                details: "Prepare nutritious breakfast for younger siblings. Include proteins and fruits.",
                duration: 45,
                importance: "medium",
                tips: "Prepare some items the night before to save time.",
                notes: "Nutritional breakfast improves concentration for studies."
            },
            {
                time: "7:00 AM",
                activity: "Family Breakfast",
                category: "family",
                details: "Serve breakfast and help siblings get ready for their day.",
                duration: 45,
                importance: "medium",
                tips: "Engage in positive morning conversation with family.",
                notes: "Family bonding time strengthens relationships."
            },
            {
                time: "7:45 AM",
                activity: "Morning Break & Preparation",
                category: "break",
                details: "Short rest and preparation for studies. Organize study materials.",
                duration: 15,
                importance: "low",
                tips: "Stretch for 5 minutes to awaken your body.",
                notes: "Short breaks between activities improve productivity."
            },
            {
                time: "8:00 AM",
                activity: "Study Session 1",
                category: "study",
                details: "First study subject of the day. Focus on challenging topics first.",
                duration: 90,
                importance: "high",
                tips: "Use Pomodoro technique: 25 min study, 5 min break.",
                notes: "Morning hours are peak concentration time."
            },
            {
                time: "9:30 AM",
                activity: "Short Break & Hydration",
                category: "break",
                details: "15-minute rest, snack, and hydration break.",
                duration: 15,
                importance: "medium",
                tips: "Drink a full glass of water and have a healthy snack.",
                notes: "Hydration is crucial for brain function."
            },
            {
                time: "9:45 AM",
                activity: "Study Session 2",
                category: "study",
                details: "Second study subject of the day. Focus on application problems.",
                duration: 90,
                importance: "high",
                tips: "Review previous session notes for 5 minutes.",
                notes: "Spaced repetition improves long-term retention."
            },
            {
                time: "11:15 AM",
                activity: "Dhuhr Prayer",
                category: "prayer",
                details: "Midday prayer break. Take this time to refresh mentally.",
                duration: 15,
                importance: "high",
                tips: "Perform prayer in a different room for change of scenery.",
                notes: "Breaks for prayer help prevent burnout."
            },
            {
                time: "11:30 AM",
                activity: "Lunch Preparation & Meal",
                category: "personal",
                details: "Prepare and enjoy a balanced lunch. Include vegetables and protein.",
                duration: 45,
                importance: "medium",
                tips: "Listen to beneficial talks or light music while preparing food.",
                notes: "Proper nutrition fuels afternoon productivity."
            },
            {
                time: "12:15 PM",
                activity: "Rest & Digestion Break",
                category: "break",
                details: "Short rest after lunch to aid digestion.",
                duration: 15,
                importance: "low",
                tips: "Avoid lying down immediately after eating.",
                notes: "Short walk can aid digestion and refresh mind."
            },
            {
                time: "12:30 PM",
                activity: "Study Session 3",
                category: "study",
                details: "Third study subject of the day. Focus on revision and practice.",
                duration: 90,
                importance: "high",
                tips: "Work on practice problems and past papers.",
                notes: "Afternoon is good for practicing application."
            },
            {
                time: "2:00 PM",
                activity: "Asr Prayer",
                category: "prayer",
                details: "Afternoon prayer. Perfect time for short meditation.",
                duration: 15,
                importance: "high",
                tips: "Combine prayer with 2 minutes of mindful breathing.",
                notes: "This break prevents afternoon slump."
            },
            {
                time: "2:15 PM",
                activity: "Energy Break & Snack",
                category: "break",
                details: "Refreshment break to maintain energy levels.",
                duration: 15,
                importance: "medium",
                tips: "Have fruits or nuts for sustained energy.",
                notes: "Healthy snacks prevent energy crashes."
            },
            {
                time: "2:30 PM",
                activity: "Study Session 4",
                category: "study",
                details: "Fourth study subject of the day. Focus on understanding concepts.",
                duration: 90,
                importance: "high",
                tips: "Use visual aids and diagrams for complex topics.",
                notes: "Variety in study methods improves engagement."
            },
            {
                time: "4:00 PM",
                activity: "Personal Development",
                category: "personal",
                details: "Hobbies, reading, or skill development. Optional: light exercise.",
                duration: 60,
                importance: "medium",
                tips: "Learn something new outside academic subjects.",
                notes: "Personal growth activities reduce stress."
            },
            {
                time: "5:00 PM",
                activity: "Connect with Khisa",
                category: "chat",
                details: "Call or chat with Khisa. Share your day's progress and challenges.",
                duration: 30,
                importance: "high",
                tips: "Be open about any difficulties you're facing.",
                notes: "Regular communication strengthens relationships."
            },
            {
                time: "5:30 PM",
                activity: "Family Assistance",
                category: "family",
                details: "Help with household chores and spend time with younger siblings.",
                duration: 60,
                importance: "medium",
                tips: "Make chores enjoyable by listening to podcasts or audiobooks.",
                notes: "Contributing to family builds responsibility."
            },
            {
                time: "6:30 PM",
                activity: "Maghrib Prayer",
                category: "prayer",
                details: "Sunset prayer. Reflect on the day's blessings.",
                duration: 15,
                importance: "high",
                tips: "Pray with gratitude for the day's accomplishments.",
                notes: "Evening prayers help in daily reflection."
            },
            {
                time: "6:45 PM",
                activity: "Evening Routine & Dinner",
                category: "personal",
                details: "Dinner preparation and family time. Light, healthy dinner recommended.",
                duration: 75,
                importance: "medium",
                tips: "Keep dinner light for better sleep quality.",
                notes: "Family dinners promote bonding and communication."
            },
            {
                time: "8:00 PM",
                activity: "Isha Prayer",
                category: "prayer",
                details: "Night prayer. Prepare mentally for rest.",
                duration: 15,
                importance: "high",
                tips: "Make sincere dua for yourself and loved ones.",
                notes: "Evening prayers complete the daily spiritual cycle."
            },
            {
                time: "8:15 PM",
                activity: "Evening Review & Planning",
                category: "personal",
                details: "Review today's work, note accomplishments, and plan for tomorrow.",
                duration: 45,
                importance: "high",
                tips: "Write down 3 things you're grateful for today.",
                notes: "Daily review improves self-awareness and planning."
            },
            {
                time: "9:00 PM",
                activity: "Wind Down & Relaxation",
                category: "personal",
                details: "Relaxation, light reading, and preparation for sleep.",
                duration: 30,
                importance: "medium",
                tips: "Avoid screens 30 minutes before sleep.",
                notes: "Proper wind-down routine improves sleep quality."
            },
            {
                time: "9:30 PM",
                activity: "Sleep",
                category: "personal",
                details: "Rest for tomorrow's activities. Aim for 7-8 hours of quality sleep.",
                duration: 0,
                importance: "high",
                tips: "Keep room dark and at comfortable temperature.",
                notes: "Consistent sleep schedule regulates body clock."
            }
        ];

        // Achievements data
        const ACHIEVEMENTS = [
            { id: 'early_bird', name: 'Early Bird', description: 'Wake up at 5 AM for 7 consecutive days', points: 50, icon: 'fas fa-sun' },
            { id: 'prayer_perfect', name: 'Prayer Perfect', description: 'Complete all 5 daily prayers for 30 days', points: 100, icon: 'fas fa-mosque' },
            { id: 'study_streak', name: 'Study Streak', description: 'Complete all study sessions for 5 days straight', points: 75, icon: 'fas fa-book' },
            { id: 'quran_master', name: 'Quran Master', description: 'Read Quran daily for 40 days', points: 150, icon: 'fas fa-quran' },
            { id: 'family_time', name: 'Family Time', description: 'Complete all family activities for 14 days', points: 60, icon: 'fas fa-users' },
            { id: 'productivity_guru', name: 'Productivity Guru', description: 'Achieve 100% completion for 3 consecutive days', points: 200, icon: 'fas fa-chart-line' },
            { id: 'health_conscious', name: 'Health Conscious', description: 'Complete all breaks and meals for 21 days', points: 80, icon: 'fas fa-heart' },
            { id: 'communication_star', name: 'Communication Star', description: 'Connect with Khisa daily for 7 days', points: 40, icon: 'fas fa-comments' },
            { id: 'planning_pro', name: 'Planning Pro', description: 'Complete evening review for 10 consecutive days', points: 55, icon: 'fas fa-clipboard-list' }
        ];

        // Habit tracker data
        const DEFAULT_HABITS = [
            { id: 'water', name: 'Drink 8 glasses of water', icon: 'fas fa-glass-water', streak: 0 },
            { id: 'exercise', name: '30 minutes of exercise', icon: 'fas fa-running', streak: 0 },
            { id: 'reading', name: 'Read 30 minutes', icon: 'fas fa-book-open', streak: 0 },
            { id: 'gratitude', name: 'Write gratitude journal', icon: 'fas fa-pen', streak: 0 },
            { id: 'planning', name: 'Plan next day', icon: 'fas fa-calendar-plus', streak: 0 }
        ];

        // Quran tracker data
        const QURAN_DATA = {
            currentPage: 1,
            totalPages: 604,
            currentSurah: 'Al-Fatihah',
            readingHistory: []
        };

        // ====== APPLICATION STATE ======
        let currentDay = new Date().getDay();
        let scheduleData = JSON.parse(JSON.stringify(SCHEDULE_TEMPLATE));
        let completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || {};
        let skippedTasks = JSON.parse(localStorage.getItem('skippedTasks')) || {};
        let userAuthenticated = false;
        let messagesFromKhisa = JSON.parse(localStorage.getItem('messagesFromKhisa')) || [];
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        let achievements = JSON.parse(localStorage.getItem('achievements')) || {};
        let habits = JSON.parse(localStorage.getItem('habits')) || DEFAULT_HABITS;
        let files = JSON.parse(localStorage.getItem('files')) || [];
        let quranData = JSON.parse(localStorage.getItem('quranData')) || QURAN_DATA;
        let lastBackup = localStorage.getItem('lastBackup') || null;
        let missedTasksAlarms = JSON.parse(localStorage.getItem('missedTasksAlarms')) || {};

        // Pomodoro timer state
        let pomodoroState = {
            isRunning: false,
            isBreak: false,
            timeLeft: 25 * 60, // 25 minutes in seconds
            workDuration: 25 * 60,
            breakDuration: 5 * 60,
            longBreakDuration: 15 * 60,
            pomodoroCount: 0,
            breakCount: 0,
            timerInterval: null
        };

        // Voice recognition
        let recognition = null;
        let isListening = false;

        // Calendar state
        let calendarDate = new Date();
        let currentMonth = calendarDate.getMonth();
        let currentYear = calendarDate.getFullYear();

        // ====== DOM ELEMENTS ======
        const authOverlay = document.getElementById('authOverlay');
        const appContainer = document.getElementById('appContainer');
        const loginBtn = document.getElementById('loginBtn');
        const authError = document.getElementById('authError');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const logoutBtn = document.getElementById('logoutBtn');

        // ====== INITIALIZATION ======
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('currentYear').textContent = new Date().getFullYear();
            setupAuthentication();
            updateClock();
            setInterval(updateClock, 1000);

            const savedAuth = localStorage.getItem('userAuthenticated');
            if (savedAuth === 'true') {
                const savedTime = parseInt(localStorage.getItem('authTime') || '0');
                const currentTime = Date.now();
                if (currentTime - savedTime < 24 * 60 * 60 * 1000) {
                    userAuthenticated = true;
                    authOverlay.classList.add('hidden');
                    setTimeout(() => {
                        appContainer.style.display = 'block';
                        initializeApp();
                    }, 300);
                } else {
                    localStorage.removeItem('userAuthenticated');
                    localStorage.removeItem('authTime');
                }
            }

            // Initialize voice recognition
            if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
                const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                recognition = new SpeechRecognition();
                recognition.continuous = false;
                recognition.interimResults = false;
                recognition.lang = 'en-US';

                recognition.onresult = handleVoiceCommand;
                recognition.onerror = () => {
                    showNotification('Voice Error', 'Could not process voice command.');
                    isListening = false;
                    updateVoiceUI();
                };
                recognition.onend = () => {
                    isListening = false;
                    updateVoiceUI();
                };
            }
        });

        // ====== AUTHENTICATION ======
        function setupAuthentication() {
            loginBtn.addEventListener('click', handleLogin);
            passwordInput.addEventListener('keypress', (e) => e.key === 'Enter' && handleLogin());
            usernameInput.addEventListener('keypress', (e) => e.key === 'Enter' && passwordInput.focus());
        }

        function handleLogin() {
            localStorage.setItem('isFirstLogin', 'true');
            const username = usernameInput.value.trim();
            const password = passwordInput.value;

            authError.textContent = '';
            authError.innerHTML = '';

            if (username !== CORRECT_USERNAME) {
                authError.innerHTML = '<i class="fas fa-exclamation-circle"></i> Invalid username. Please try again.';
                shakeElement(authOverlay);
                return;
            }

            if (password !== CORRECT_PASSWORD) {
                authError.innerHTML = '<i class="fas fa-exclamation-circle"></i> Incorrect password. Please try again.';
                shakeElement(authOverlay);
                return;
            }

            userAuthenticated = true;
            localStorage.setItem('userAuthenticated', 'true');
            localStorage.setItem('authTime', Date.now().toString());

            authOverlay.classList.add('hidden');
            setTimeout(() => {
                appContainer.style.display = 'block';
                initializeApp();
                showNotification('Welcome Back!', 'Scheduled tasks are loaded and ready for the day.');
            }, 500);
        }

        function handleLogout() {
            localStorage.removeItem('userAuthenticated');
            localStorage.removeItem('authTime');
            appContainer.style.display = 'none';
            authOverlay.classList.remove('hidden');
            usernameInput.value = '';
            passwordInput.value = '';
            authError.textContent = '';
            showNotification('Logged Out', 'You have been successfully logged out.');
        }

        // ====== EMAIL FUNCTIONS ======
        async function sendEmail(subject, message, type = 'task', activity = '') {
            try {
                let icon = '📋';
                let typeClass = '';

                if (type === 'missed') {
                    icon = '⚠️';
                    typeClass = 'urgent';
                } else if (type === 'achievement') {
                    icon = '🏆';
                    typeClass = 'completed';
                } else if (type === 'communication') {
                    icon = '💬';
                } else if (type === 'completed') {
                    icon = '✅';
                    typeClass = 'completed';
                } else if (type === 'skipped') {
                    icon = '⏭️';
                } else if (type === 'reminder') {
                    icon = '⏰';
                }

                const templateParams = {
                    to_email: 'lemanuelneuro@gmail.com',
                    subject: icon + ' ' + subject,
                    icon: icon,
                    message: message,
                    date: new Date().toLocaleDateString(),
                    time: new Date().toLocaleTimeString(),
                    activity: activity || type,
                    type_class: typeClass
                };

                await emailjs.send(
                    EMAILJS_CONFIG.service_id,
                    EMAILJS_CONFIG.template_id,
                    templateParams,
                    EMAILJS_CONFIG.user_id
                );

                console.log('✅ Email sent:', subject);
                return true;
            } catch (error) {
                console.error('❌ Failed to send email:', error);
                return false;
            }
        }
        // ====== APPLICATION INITIALIZATION ======
        function initializeApp() {
            currentDay = new Date().getDay(); // Set to current day
            updateScheduleForDay(currentDay);
            renderSchedule();
            renderPrayerTimes();
            renderCalendar();
            renderWeather();
            renderNotes();
            renderAchievements();
            renderFiles();
            renderHabits();
            renderQuranProgress();
            updateProgress();
            setupEventListeners();
            setInterval(checkForNotifications, 30000);
            setTimeout(checkForNotifications, 2000);
            animatePageElements();
            checkForKhisaMessages();
            startMissedTasksChecker();
        }

        // ====== SCHEDULE MANAGEMENT ======
        function updateScheduleForDay(dayIndex) {
            const subjects = SUBJECTS_BY_DAY[dayIndex] || SUBJECTS_BY_DAY[0];
            const today = new Date();
            const isFastingDay = today.getDay() === 1 || today.getDay() === 4; // Monday or Thursday

            scheduleData = JSON.parse(JSON.stringify(SCHEDULE_TEMPLATE));

            // Modify schedule for fasting days
            if (isFastingDay) {
                scheduleData.forEach(item => {
                    if (item.activity.includes('Breakfast') || item.activity.includes('Lunch')) {
                        item.activity = `Fasting - ${item.activity}`;
                        item.details = 'Observing fast today. Meal skipped until sunset.';
                        item.importance = 'high';
                        item.tips = 'Drink plenty of water during non-fasting hours.';
                        item.notes = 'Fasting on Mondays and Thursdays is recommended.';
                    }
                });
            }

            let studySessionIndex = 0;
            for (let i = 0; i < scheduleData.length; i++) {
                const item = scheduleData[i];

                if (item.category === 'study') {
                    item.details = `Study ${subjects[studySessionIndex]}. Focus on key concepts and practice problems.`;
                    item.activity = `Study: ${subjects[studySessionIndex]}`;
                    studySessionIndex++;
                }

                // Check if task is already completed or skipped
                const taskId = `${dayIndex}-${i}`;
                item.completed = completedTasks[taskId] || false;
                item.skipped = skippedTasks[taskId] || false;
                item.id = taskId;
            }

            // Update day display
            const dayName = DAYS[dayIndex];
            const dateStr = today.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            document.getElementById('scheduleDay').textContent = `${dayName}'s Schedule`;
            document.getElementById('currentDate').innerHTML = `<i class="fas fa-calendar"></i> ${dateStr}`;

            // Update day navigation buttons - set current day as active
            document.querySelectorAll('.day-btn').forEach((btn, index) => {
                if (index === dayIndex) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }

        function renderSchedule() {
            const timeline = document.getElementById('scheduleTimeline');
            timeline.innerHTML = '';

            scheduleData.forEach((item, index) => {
                const timeItem = document.createElement('div');
                timeItem.className = `time-item ${item.category} ${item.completed ? 'completed' : ''} ${item.skipped ? 'skipped' : ''}`;
                timeItem.style.animationDelay = `${index * 0.05}s`;

                const itemTime = parseTimeString(item.time);
                const now = new Date();
                let status = getTaskStatus(itemTime, item.completed, item.skipped);
                const icon = getActivityIcon(item.category, item.activity);
                const timeIcon = item.category === 'prayer' ? 'fas fa-mosque' :
                                item.category === 'study' ? 'fas fa-book' :
                                item.category === 'break' ? 'fas fa-coffee' :
                                item.category === 'chat' ? 'fas fa-comments' : 'fas fa-clock';

                timeItem.innerHTML = `
                    <div class="time-marker">
                        <i class="${icon}"></i>
                    </div>
                    <div class="time-header">
                        <div class="time">
                            <i class="${timeIcon}"></i>
                            ${item.time}
                        </div>
                        <div class="task-status status-${status}">${formatStatus(status)}</div>
                    </div>
                    <div class="activity">
                        <i class="${icon}"></i>
                        ${item.activity}
                    </div>
                    <div class="activity-details">${item.details}</div>

                    <div class="task-details-content" id="details-${item.id}">
                        <div class="detail-item">
                            <span class="detail-label">Duration:</span>
                            <span class="detail-value">${item.duration} minutes</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Importance:</span>
                            <span class="detail-value">${item.importance.toUpperCase()}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Tips:</span>
                            <span class="detail-value">${item.tips}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Notes:</span>
                            <span class="detail-value">${item.notes}</span>
                        </div>
                    </div>

                    <button class="task-details-btn" data-task="${item.id}">
                        <i class="fas fa-chevron-down"></i> View Details
                    </button>

                    <div class="task-meta">
                        <div class="checkbox-container">
                            <input type="checkbox" id="task-${item.id}" class="checkbox-input" ${item.completed ? 'checked' : ''}>
                            <span class="custom-checkbox"></span>
                            <label for="task-${item.id}" class="checkbox-label">Mark as completed</label>
                        </div>
                        <div class="task-actions">
                            <button class="task-btn" data-action="skip" data-task="${index}">
                                <i class="fas fa-forward"></i> Skip
                            </button>
                            <button class="task-btn" data-action="reschedule" data-task="${index}">
                                <i class="fas fa-clock"></i> Reschedule
                            </button>
                            <button class="task-btn" data-action="remind" data-task="${index}">
                                <i class="fas fa-bell"></i> Remind
                            </button>
                        </div>
                    </div>
                `;

                timeline.appendChild(timeItem);

                // Add event listeners
                const checkbox = timeItem.querySelector('.checkbox-input');
                checkbox.addEventListener('change', function() {
                    const completed = this.checked;
                    item.completed = completed;

                    if (completed) {
                        item.skipped = false;
                        delete skippedTasks[item.id];
                    }

                    completedTasks[item.id] = completed;
                    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
                    localStorage.setItem('skippedTasks', JSON.stringify(skippedTasks));

                    const statusElement = timeItem.querySelector('.task-status');
                    const newStatus = completed ? 'completed' : getTaskStatus(itemTime, false, false);
                    statusElement.className = `task-status status-${newStatus}`;
                    statusElement.textContent = formatStatus(newStatus);

                    updateProgress();
                    checkAchievements();

                    // Send email notification for important completed tasks
                    if (completed && (item.importance === 'high' || item.category === 'prayer')) {
                    sendEmail('Task Completed', `Umulkher completed: "${item.activity}" at ${item.time}\nDay: ${DAYS[currentDay]}`, 'completed', item.activity);
                    }

                    if (completed) {
                        showNotification('Task Completed', `Great job completing "${item.activity}"!`);
                    }
                });

                const skipBtn = timeItem.querySelector('[data-action="skip"]');
                skipBtn.addEventListener('click', function() {
                    item.skipped = !item.skipped;

                    if (item.skipped) {
                        item.completed = false;
                        checkbox.checked = false;
                        delete completedTasks[item.id];
                    }

                    skippedTasks[item.id] = item.skipped;
                    localStorage.setItem('skippedTasks', JSON.stringify(skippedTasks));
                    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));

                    const statusElement = timeItem.querySelector('.task-status');
                    const newStatus = item.skipped ? 'skipped' : getTaskStatus(itemTime, false, false);
                    statusElement.className = `task-status status-${newStatus}`;
                    statusElement.textContent = formatStatus(newStatus);

                    updateProgress();

                    if (item.skipped && item.importance === 'high') {
                    sendEmail('Task Skipped', `Umulkher skipped: "${item.activity}" scheduled for ${item.time}\nDay: ${DAYS[currentDay]}`, 'skipped', item.activity);
                    }

                    showNotification('Task Updated', `"${item.activity}" marked as ${item.skipped ? 'skipped' : 'unskipped'}.`);
                });

                const rescheduleBtn = timeItem.querySelector('[data-action="reschedule"]');
                rescheduleBtn.addEventListener('click', function() {
                    openRescheduleModal(index);
                });

                const detailsBtn = timeItem.querySelector('.task-details-btn');
                detailsBtn.addEventListener('click', function() {
                    const detailsContent = document.getElementById(`details-${item.id}`);
                    const icon = this.querySelector('i');

                    if (detailsContent.classList.contains('expanded')) {
                        detailsContent.classList.remove('expanded');
                        icon.className = 'fas fa-chevron-down';
                        this.innerHTML = '<i class="fas fa-chevron-down"></i> View Details';
                    } else {
                        detailsContent.classList.add('expanded');
                        icon.className = 'fas fa-chevron-up';
                        this.innerHTML = '<i class="fas fa-chevron-up"></i> Hide Details';
                    }
                });

                const remindBtn = timeItem.querySelector('[data-action="remind"]');
                remindBtn.addEventListener('click', function() {
                    setReminderForTask(index);
                });

                setTimeout(() => {
                    timeItem.classList.add('visible');
                }, 50);
            });
        }

        function openRescheduleModal(taskIndex) {
            const task = scheduleData[taskIndex];
            document.getElementById('rescheduleTask').value = task.activity;
            document.getElementById('rescheduleDate').value = new Date().toISOString().split('T')[0];

            // Set default time to current time + 1 hour
            const now = new Date();
            now.setHours(now.getHours() + 1);
            document.getElementById('rescheduleTime').value = now.toTimeString().substring(0,5);

            document.getElementById('rescheduleModal').classList.add('active');

            // Store task index for later use
            document.getElementById('confirmReschedule').dataset.task = taskIndex;
        }

        // ====== PRAYER TIMES ======
        function renderPrayerTimes() {
            const container = document.getElementById('prayerTimesContainer');
            container.innerHTML = '';

            // Calculate prayer times based on location (simplified for demo)
            const prayerTimes = calculatePrayerTimes();

            prayerTimes.forEach(prayer => {
                const prayerItem = document.createElement('div');
                prayerItem.className = 'prayer-item';

                prayerItem.innerHTML = `
                    <div class="prayer-info">
                        <div class="prayer-icon">
                            <i class="${prayer.icon}"></i>
                        </div>
                        <div>
                            <div class="prayer-name">${prayer.name}</div>
                            <div style="color: var(--text-gray); font-size: 0.9rem; margin-top: 3px;">${prayer.recommended}</div>
                        </div>
                    </div>
                    <div class="prayer-time">${prayer.time}</div>
                `;

                container.appendChild(prayerItem);
            });

            updateCurrentPrayer();
        }

        function calculatePrayerTimes() {
            // Simplified prayer time calculation
            // In a real app, you would use an API or calculation based on location
            return [
                { name: "Fajr", time: "5:30 AM", icon: "fas fa-moon", recommended: "Before sunrise" },
                { name: "Dhuhr", time: "12:45 PM", icon: "fas fa-sun", recommended: "Midday" },
                { name: "Asr", time: "4:00 PM", icon: "fas fa-sun", recommended: "Afternoon" },
                { name: "Maghrib", time: "6:30 PM", icon: "fas fa-sunset", recommended: "After sunset" },
                { name: "Isha", time: "8:00 PM", icon: "fas fa-moon", recommended: "Night prayer" }
            ];
        }

        // ====== CALENDAR VIEW ======
        function renderCalendar() {
            const calendarGrid = document.getElementById('calendarGrid');
            calendarGrid.innerHTML = '';

            // Add day names
            ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(day => {
                const dayElement = document.createElement('div');
                dayElement.className = 'calendar-day-name';
                dayElement.textContent = day;
                calendarGrid.appendChild(dayElement);
            });

            // Get first day of month
            const firstDay = new Date(currentYear, currentMonth, 1).getDay();
            const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
            const today = new Date();

            // Add empty cells for days before first day
            for (let i = 0; i < firstDay; i++) {
                const dayElement = createCalendarDay(null, 'other-month');
                calendarGrid.appendChild(dayElement);
            }

            // Add days of month
            for (let day = 1; day <= daysInMonth; day++) {
                const dayDate = new Date(currentYear, currentMonth, day);
                const isToday = dayDate.getDate() === today.getDate() &&
                               dayDate.getMonth() === today.getMonth() &&
                               dayDate.getFullYear() === today.getFullYear();

                const hasSchedule = checkIfDayHasSchedule(dayDate);
                const dayElement = createCalendarDay(day, isToday ? 'today' : '', hasSchedule);

                // Add click event to show schedule for that day
                dayElement.addEventListener('click', () => {
                    if (dayDate.getDay() !== currentDay) {
                        currentDay = dayDate.getDay();
                        updateScheduleForDay(currentDay);
                        renderSchedule();
                        updateProgress();
                        showNotification('Day Changed', `Showing schedule for ${DAYS[currentDay]}`);
                    }
                });

                calendarGrid.appendChild(dayElement);
            }

            // Update month display
            document.getElementById('currentMonth').textContent =
                `${MONTHS[currentMonth]} ${currentYear}`;

            // Render today's events
            renderCalendarEvents();
        }

        function createCalendarDay(dayNumber, className = '', hasSchedule = false) {
            const dayElement = document.createElement('div');
            dayElement.className = `calendar-day ${className} ${hasSchedule ? 'has-schedule' : ''}`;
            if (dayNumber) {
                dayElement.textContent = dayNumber;
            }
            return dayElement;
        }

        function checkIfDayHasSchedule(date) {
            // Check if there are tasks scheduled for this day
            const dayIndex = date.getDay();
            const taskIds = Object.keys(completedTasks);
            return taskIds.some(id => id.startsWith(`${dayIndex}-`));
        }

        function renderCalendarEvents() {
            const eventsContainer = document.getElementById('calendarEvents');
            eventsContainer.innerHTML = '<h4>Today\'s Events:</h4>';

            const todayEvents = scheduleData.slice(0, 3); // Show first 3 events
            todayEvents.forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.className = 'calendar-event';
                eventElement.innerHTML = `
                    <div class="event-time">${event.time}</div>
                    <div class="event-title">${event.activity}</div>
                `;
                eventsContainer.appendChild(eventElement);
            });
        }

        // ====== WEATHER INTEGRATION ======
        async function renderWeather() {
            try {
                // Using OpenWeatherMap API (free tier)
                const API_KEY = 'f2b3b0f43a036f04e75e543b0f5d9060';
                const city = 'Kitale';

                // Validate API key format
                if (!API_KEY || API_KEY === 'YOUR_OPENWEATHER_API_KEY' || API_KEY.length < 20) {
                    throw new Error('Invalid API key format');
                }

                // Fetch current weather
                const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);

                if (!weatherResponse.ok) {
                    if (weatherResponse.status === 401) {
                        throw new Error('Invalid API key - please check your OpenWeatherMap API key');
                    } else if (weatherResponse.status === 404) {
                        throw new Error(`City "${city}" not found`);
                    } else {
                        throw new Error(`Weather API error: ${weatherResponse.status}`);
                    }
                }

                const weatherData = await weatherResponse.json();

                // Update current weather display
                document.getElementById('weatherTemp').textContent = `${Math.round(weatherData.main.temp)}°C`;
                document.getElementById('weatherCondition').textContent = weatherData.weather[0].main;
                document.getElementById('weatherLocation').textContent = `${weatherData.name}, ${weatherData.sys.country}`;

                // Set appropriate icon
                const icon = getWeatherIcon(weatherData.weather[0].icon);
                document.getElementById('weatherIcon').className = `fas fa-${icon}`;

                // Fetch 5-day forecast (free API returns 3-hour intervals for 5 days)
                const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`);

                if (!forecastResponse.ok) {
                    console.warn('Forecast API error, using current weather data only');
                    // Still show current weather even if forecast fails
                    renderLimitedForecast(weatherData);
                } else {
                    const forecastData = await forecastResponse.json();
                    renderWeatherForecast(forecastData.list);
                }

                // Log success for debugging
                console.log(`Weather data loaded for ${weatherData.name}: ${weatherData.main.temp}°C, ${weatherData.weather[0].main}`);

            } catch (error) {
                console.error('Weather API error:', error.message);

                // Show error to user in a friendly way
                document.getElementById('weatherCondition').textContent = 'Weather Update';
                document.getElementById('weatherLocation').innerHTML =
                    `<i class="fas fa-exclamation-triangle" style="color: var(--warning-color);"></i> ${error.message.split(':')[0]}`;

                // Fallback to mock data with delay
                setTimeout(() => {
                    renderMockWeather();
                    showNotification('Weather Update', 'Using local weather data for now. Real weather will resume when available.');
                }, 1000);
            }
        }

        function renderMockWeather() {
            // More realistic mock data for Kitale
            const kitaleMockData = {
                temp: Math.floor(Math.random() * 5) + 20, // Random temp between 20-25°C
                conditions: ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain'][Math.floor(Math.random() * 4)],
                forecasts: [
                    { day: 'Today', temp: Math.floor(Math.random() * 5) + 20, icon: 'cloud-sun' },
                    { day: 'Tomorrow', temp: Math.floor(Math.random() * 5) + 21, icon: 'sun' },
                    { day: getDayAfterTomorrow(), temp: Math.floor(Math.random() * 5) + 22, icon: 'cloud-rain' }
                ]
            };

            document.getElementById('weatherTemp').textContent = `${kitaleMockData.temp}°C`;
            document.getElementById('weatherCondition').textContent = kitaleMockData.conditions;
            document.getElementById('weatherLocation').textContent = 'Kitale, KE';
            document.getElementById('weatherIcon').className = `fas fa-${getIconFromCondition(kitaleMockData.conditions)}`;

            // Mock forecast
            const forecastContainer = document.getElementById('weatherForecast');
            forecastContainer.innerHTML = '';

            kitaleMockData.forecasts.forEach(day => {
                const forecastElement = document.createElement('div');
                forecastElement.className = 'forecast-day';
                forecastElement.innerHTML = `
                    <div class="forecast-date">${day.day}</div>
                    <div class="forecast-icon"><i class="fas fa-${day.icon}"></i></div>
                    <div class="forecast-temp">${day.temp}°C</div>
                `;
                forecastContainer.appendChild(forecastElement);
            });
        }

        function getDayAfterTomorrow() {
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const today = new Date();
            const dayAfterTomorrow = new Date(today);
            dayAfterTomorrow.setDate(today.getDate() + 2);
            return days[dayAfterTomorrow.getDay()];
        }

        function getIconFromCondition(condition) {
            const conditionMap = {
                'Sunny': 'sun',
                'Partly Cloudy': 'cloud-sun',
                'Cloudy': 'cloud',
                'Light Rain': 'cloud-rain',
                'Rain': 'cloud-showers-heavy',
                'Thunderstorm': 'bolt',
                'Snow': 'snowflake',
                'Mist': 'smog'
            };
            return conditionMap[condition] || 'cloud';
        }

        function renderWeatherForecast(forecastList) {
            const forecastContainer = document.getElementById('weatherForecast');
            forecastContainer.innerHTML = '';

            // Get one forecast per day (at 12:00 PM for consistency)
            const dailyForecasts = {};

            forecastList.forEach(forecast => {
                const date = new Date(forecast.dt * 1000);
                const dateString = date.toLocaleDateString('en-US', { weekday: 'short' });
                const hour = date.getHours();

                // Use forecast closest to 12:00 PM for each day
                if (!dailyForecasts[dateString] || Math.abs(hour - 12) < Math.abs(new Date(dailyForecasts[dateString].dt * 1000).getHours() - 12)) {
                    dailyForecasts[dateString] = forecast;
                }
            });

            // Convert to array and take next 3 days
            const forecastArray = Object.entries(dailyForecasts)
                .slice(0, 3)
                .map(([dayName, forecast]) => ({
                    day: dayName,
                    temp: Math.round(forecast.main.temp),
                    icon: getWeatherIcon(forecast.weather[0].icon)
                }));

            forecastArray.forEach(day => {
                const forecastElement = document.createElement('div');
                forecastElement.className = 'forecast-day';
                forecastElement.innerHTML = `
                    <div class="forecast-date">${day.day}</div>
                    <div class="forecast-icon"><i class="fas fa-${day.icon}"></i></div>
                    <div class="forecast-temp">${day.temp}°C</div>
                `;
                forecastContainer.appendChild(forecastElement);
            });

            // If no forecasts were found, show a message
            if (forecastArray.length === 0) {
                forecastContainer.innerHTML = '<div style="text-align: center; color: var(--text-gray); padding: 10px;">Forecast data unavailable</div>';
            }
        }

        function renderLimitedForecast(currentWeather) {
            const forecastContainer = document.getElementById('weatherForecast');
            forecastContainer.innerHTML = '';

            // Create simple forecast based on current weather
            const today = new Date();
            const days = ['Today', 'Tomorrow', getDayAfterTomorrow()];

            days.forEach((dayName, index) => {
                // Slightly vary temperature for each day
                const tempVariation = Math.round(currentWeather.main.temp) + index - 1;
                const icon = getWeatherIcon(currentWeather.weather[0].icon);

                const forecastElement = document.createElement('div');
                forecastElement.className = 'forecast-day';
                forecastElement.innerHTML = `
                    <div class="forecast-date">${dayName}</div>
                    <div class="forecast-icon"><i class="fas fa-${icon}"></i></div>
                    <div class="forecast-temp">${tempVariation}°C</div>
                `;
                forecastContainer.appendChild(forecastElement);
            });
        }

        function getWeatherIcon(iconCode) {
            const iconMap = {
                '01d': 'sun',
                '01n': 'moon',
                '02d': 'cloud-sun',
                '02n': 'cloud-moon',
                '03d': 'cloud',
                '03n': 'cloud',
                '04d': 'cloud',
                '04n': 'cloud',
                '09d': 'cloud-rain',
                '09n': 'cloud-rain',
                '10d': 'cloud-sun-rain',
                '10n': 'cloud-moon-rain',
                '11d': 'bolt',
                '11n': 'bolt',
                '13d': 'snowflake',
                '13n': 'snowflake',
                '50d': 'smog',
                '50n': 'smog'
            };
            return iconMap[iconCode] || 'cloud';
        }

        // Add weather refresh interval
        function startWeatherUpdates() {
            // Initial load
            renderWeather();

            // Refresh every 30 minutes (1800000 ms)
            setInterval(renderWeather, 30 * 60 * 1000);
        }

        // ====== NOTES/JOURNAL ======
        function renderNotes() {
            const notesList = document.getElementById('notesList');
            notesList.innerHTML = '';

            if (notes.length === 0) {
                notesList.innerHTML = '<div style="text-align: center; color: var(--text-gray); padding: 20px;">No notes yet. Create your first note!</div>';
                return;
            }

            notes.slice(0, 3).forEach((note, index) => {
                const noteElement = document.createElement('div');
                noteElement.className = 'note-item';
                noteElement.innerHTML = `
                    <div class="note-header">
                        <div class="note-title">${note.title}</div>
                        <div class="note-date">${new Date(note.date).toLocaleDateString()}</div>
                    </div>
                    <div class="note-content">${note.content.length > 100 ? note.content.substring(0, 100) + '...' : note.content}</div>
                    <div class="note-actions">
                        <button class="note-btn" data-action="view" data-index="${index}">
                            <i class="fas fa-eye"></i> View
                        </button>
                        <button class="note-btn" data-action="delete" data-index="${index}">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    </div>
                `;
                notesList.appendChild(noteElement);
            });

            // Add event listeners
            notesList.querySelectorAll('[data-action="view"]').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = e.target.closest('[data-index]').dataset.index;
                    viewNote(index);
                });
            });

            notesList.querySelectorAll('[data-action="delete"]').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = e.target.closest('[data-index]').dataset.index;
                    deleteNote(index);
                });
            });
        }

        function saveNote() {
            const title = document.getElementById('noteTitle').value.trim();
            const content = document.getElementById('noteContent').value.trim();

            if (!title || !content) {
                showNotification('Error', 'Please fill in both title and content.');
                return;
            }

            const note = {
                id: Date.now(),
                title: title,
                content: content,
                date: new Date().toISOString()
            };

            notes.unshift(note);
            localStorage.setItem('notes', JSON.stringify(notes));

            document.getElementById('noteTitle').value = '';
            document.getElementById('noteContent').value = '';
            document.getElementById('notesForm').style.display = 'none';

            renderNotes();
            showNotification('Note Saved', 'Your note has been saved successfully.');
        }

        function viewNote(index) {
            const note = notes[index];
            showNotification(note.title, note.content);
        }

        function deleteNote(index) {
            if (confirm('Are you sure you want to delete this note?')) {
                notes.splice(index, 1);
                localStorage.setItem('notes', JSON.stringify(notes));
                renderNotes();
                showNotification('Note Deleted', 'The note has been deleted.');
            }
        }

        // ====== ACHIEVEMENTS ======
        function renderAchievements() {
            const achievementsGrid = document.getElementById('achievementsGrid');
            achievementsGrid.innerHTML = '';

            ACHIEVEMENTS.forEach(achievement => {
                const isEarned = achievements[achievement.id] || false;
                const achievementElement = document.createElement('div');
                achievementElement.className = `achievement-badge ${isEarned ? 'earned' : ''}`;
                achievementElement.innerHTML = `
                    <div class="achievement-icon">
                        <i class="${achievement.icon}"></i>
                    </div>
                    <div class="achievement-name">${achievement.name}</div>
                    <div class="achievement-points">${achievement.points} pts</div>
                `;
                achievementsGrid.appendChild(achievementElement);
            });

            // Update stats
            const earnedCount = Object.values(achievements).filter(a => a).length;
            const totalCount = ACHIEVEMENTS.length;
            const percent = Math.round((earnedCount / totalCount) * 100);

            document.getElementById('achievementPercent').textContent = `${percent}%`;
            document.getElementById('earnedAchievements').textContent = `${earnedCount} earned`;
            document.getElementById('totalAchievements').textContent = `${totalCount} total`;
        }

        function checkAchievements() {
            // Check for early bird achievement
            const wakeUpTasks = Object.keys(completedTasks).filter(id => {
                const [, index] = id.split('-');
                return scheduleData[index]?.activity.includes('Wake up') && completedTasks[id];
            });
            if (wakeUpTasks.length >= 3) {
                awardAchievement('early_bird');
            }

            // Check prayer perfect achievement
            const prayerTasks = Object.keys(completedTasks).filter(id => {
                const [, index] = id.split('-');
                return scheduleData[index]?.category === 'prayer' && completedTasks[id];
            });
            if (prayerTasks.length >= 35) { // 7 days * 5 prayers
                awardAchievement('prayer_perfect');
            }

            // Check study streak
            const studyTasks = Object.keys(completedTasks).filter(id => {
                const [, index] = id.split('-');
                return scheduleData[index]?.category === 'study' && completedTasks[id];
            });
            if (studyTasks.length >= 28) { // 7 days * 4 study sessions
                awardAchievement('study_streak');
            }
        }

        function awardAchievement(achievementId) {
            if (!achievements[achievementId]) {
                achievements[achievementId] = true;
                localStorage.setItem('achievements', JSON.stringify(achievements));

                const achievement = ACHIEVEMENTS.find(a => a.id === achievementId);
                showNotification('Achievement Unlocked!', `You earned: ${achievement.name}\n${achievement.description}\n+${achievement.points} points`);

                // Send email notification
                sendEmail('Achievement: ' + achievement.name, `Umulkher unlocked: ${achievement.name}\nPoints: ${achievement.points}`, 'achievement', 'Achievement System');

                renderAchievements();
            }
        }

        // ====== FILE UPLOAD ======
        function renderFiles() {
            const filesList = document.getElementById('filesList');
            filesList.innerHTML = '';

            if (files.length === 0) {
                filesList.innerHTML = '<div style="text-align: center; color: var(--text-gray); padding: 20px;">No files uploaded yet.</div>';
                return;
            }

            files.slice(0, 3).forEach((file, index) => {
                const fileElement = document.createElement('div');
                fileElement.className = 'file-item';
                fileElement.innerHTML = `
                    <div class="file-icon">
                        <i class="fas fa-file-${getFileIcon(file.type)}"></i>
                    </div>
                    <div class="file-info">
                        <div class="file-name">${file.name}</div>
                        <div class="file-size">${formatFileSize(file.size)} • ${new Date(file.date).toLocaleDateString()}</div>
                    </div>
                    <div class="file-actions">
                        <button class="file-btn" data-action="download" data-index="${index}">
                            <i class="fas fa-download"></i>
                        </button>
                        <button class="file-btn" data-action="delete" data-index="${index}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;
                filesList.appendChild(fileElement);
            });

            // Add event listeners
            filesList.querySelectorAll('[data-action="download"]').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = e.target.closest('[data-index]').dataset.index;
                    downloadFile(index);
                });
            });

            filesList.querySelectorAll('[data-action="delete"]').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = e.target.closest('[data-index]').dataset.index;
                    deleteFile(index);
                });
            });
        }

        function getFileIcon(fileType) {
            if (fileType.includes('pdf')) return 'pdf';
            if (fileType.includes('word') || fileType.includes('doc')) return 'word';
            if (fileType.includes('excel') || fileType.includes('sheet')) return 'excel';
            if (fileType.includes('image')) return 'image';
            if (fileType.includes('video')) return 'video';
            if (fileType.includes('audio')) return 'audio';
            return 'alt';
        }

        function formatFileSize(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }

        function handleFileUpload(event) {
            const uploadedFiles = Array.from(event.target.files);

            uploadedFiles.forEach(file => {
                const fileData = {
                    id: Date.now() + Math.random(),
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    date: new Date().toISOString(),
                    data: null // In real app, you would upload to server
                };

                // Read file as data URL for demo
                const reader = new FileReader();
                reader.onload = function(e) {
                    fileData.data = e.target.result;
                    files.unshift(fileData);
                    localStorage.setItem('files', JSON.stringify(files));
                    renderFiles();

                    showNotification('File Uploaded', `${file.name} has been uploaded successfully.`);

                    // Send email notification
                    sendEmail('File Uploaded', `Umulkher uploaded: ${file.name}\nSize: ${formatFileSize(file.size)}`, 'file', 'Study Materials');
                };
                reader.readAsDataURL(file);
            });
        }

        function downloadFile(index) {
            const file = files[index];
            if (file.data) {
                const link = document.createElement('a');
                link.href = file.data;
                link.download = file.name;
                link.click();
                showNotification('Download Started', `Downloading ${file.name}...`);
            }
        }

        function deleteFile(index) {
            if (confirm('Are you sure you want to delete this file?')) {
                files.splice(index, 1);
                localStorage.setItem('files', JSON.stringify(files));
                renderFiles();
                showNotification('File Deleted', 'The file has been deleted.');
            }
        }

        // ====== HABIT TRACKER ======
        function renderHabits() {
            const habitsList = document.getElementById('habitsList');
            habitsList.innerHTML = '';

            const today = new Date().toDateString();
            const todayHabits = JSON.parse(localStorage.getItem('todayHabits')) || {};

            habits.forEach((habit, index) => {
                const isChecked = todayHabits[habit.id] || false;
                const habitElement = document.createElement('div');
                habitElement.className = 'habit-item';
                habitElement.innerHTML = `
                    <div class="habit-icon">
                        <i class="${habit.icon}"></i>
                    </div>
                    <div class="habit-info">
                        <div class="habit-name">${habit.name}</div>
                        <div class="habit-streak">
                            <i class="fas fa-fire"></i>
                            <span class="streak-count">${habit.streak} days streak</span>
                        </div>
                    </div>
                    <div class="habit-check ${isChecked ? 'checked' : ''}" data-index="${index}"></div>
                `;
                habitsList.appendChild(habitElement);
            });

            // Add event listeners
            habitsList.querySelectorAll('.habit-check').forEach(check => {
                check.addEventListener('click', (e) => {
                    const index = e.target.dataset.index;
                    toggleHabit(index);
                });
            });

            updateHabitStats();
        }

        function toggleHabit(index) {
            const habit = habits[index];
            const today = new Date().toDateString();
            let todayHabits = JSON.parse(localStorage.getItem('todayHabits')) || {};

            if (todayHabits[habit.id]) {
                // Uncheck habit
                delete todayHabits[habit.id];
                habit.streak = Math.max(0, habit.streak - 1);
            } else {
                // Check habit
                todayHabits[habit.id] = true;
                habit.streak += 1;
            }

            localStorage.setItem('todayHabits', JSON.stringify(todayHabits));
            localStorage.setItem('habits', JSON.stringify(habits));
            renderHabits();
            checkAchievements();
        }

        function updateHabitStats() {
            const todayHabits = JSON.parse(localStorage.getItem('todayHabits')) || {};
            const doneCount = Object.keys(todayHabits).length;
            const totalCount = habits.length;
            const successRate = totalCount > 0 ? Math.round((doneCount / totalCount) * 100) : 0;

            // Find longest streak
            const longestStreak = habits.reduce((max, habit) => Math.max(max, habit.streak), 0);

            document.getElementById('currentStreak').textContent = longestStreak;
            document.getElementById('habitsDone').textContent = doneCount;
            document.getElementById('successRate').textContent = `${successRate}%`;
        }

        // ====== QURAN TRACKER ======
        function renderQuranProgress() {
            const percent = Math.round((quranData.currentPage / quranData.totalPages) * 100);
            document.getElementById('quranPercent').textContent = `${percent}%`;
            document.getElementById('quranFill').style.width = `${percent}%`;

            document.querySelector('.quran-current').textContent = `Currently: Surah ${quranData.currentSurah}`;
            document.querySelector('.quran-total').textContent = `Page ${quranData.currentPage} of ${quranData.totalPages}`;

            // Render history
            const historyContainer = document.getElementById('quranHistory');
            historyContainer.innerHTML = '';

            if (quranData.readingHistory.length === 0) {
                historyContainer.innerHTML = '<div style="text-align: center; color: var(--text-gray); padding: 10px;">No reading history yet.</div>';
                return;
            }

            quranData.readingHistory.slice(0, 3).forEach(reading => {
                const historyElement = document.createElement('div');
                historyElement.className = 'history-item';
                historyElement.innerHTML = `
                    <div class="history-date">${new Date(reading.date).toLocaleDateString()}</div>
                    <div class="history-pages">${reading.pages} pages</div>
                `;
                historyContainer.appendChild(historyElement);
            });
        }

        function recordQuranReading(pages) {
            if (pages <= 0) return;

            quranData.currentPage = Math.min(quranData.totalPages, quranData.currentPage + pages);

            // Add to history
            quranData.readingHistory.unshift({
                date: new Date().toISOString(),
                pages: pages
            });

            // Keep only last 10 entries
            quranData.readingHistory = quranData.readingHistory.slice(0, 10);

            localStorage.setItem('quranData', JSON.stringify(quranData));
            renderQuranProgress();
            checkAchievements();

            // Send email notification for significant progress
            if (pages >= 5) {
            sendEmail('Quran Progress', `Umulkher read ${pages} pages\nCurrent page: ${quranData.currentPage}`, 'quran', 'Quran Reading');
            }

            showNotification('Quran Progress', `You read ${pages} pages today! Current page: ${quranData.currentPage}`);
        }

        // ====== POMODORO TIMER ======
        function startPomodoro() {
            if (pomodoroState.timerInterval) {
                clearInterval(pomodoroState.timerInterval);
            }

            pomodoroState.isRunning = true;
            updatePomodoroUI();

            pomodoroState.timerInterval = setInterval(() => {
                pomodoroState.timeLeft--;
                updatePomodoroUI();

                if (pomodoroState.timeLeft <= 0) {
                    clearInterval(pomodoroState.timerInterval);
                    pomodoroState.isRunning = false;

                    if (!pomodoroState.isBreak) {
                        // Work session completed
                        pomodoroState.pomodoroCount++;
                        if (pomodoroState.pomodoroCount % 4 === 0) {
                            // Long break after 4 pomodoros
                            pomodoroState.timeLeft = pomodoroState.longBreakDuration;
                            showNotification('Pomodoro Complete!', 'Time for a long break (15 minutes)!');
                        } else {
                            // Short break
                            pomodoroState.timeLeft = pomodoroState.breakDuration;
                            showNotification('Pomodoro Complete!', 'Time for a short break (5 minutes)!');
                        }
                        pomodoroState.breakCount++;
                    } else {
                        // Break completed
                        pomodoroState.timeLeft = pomodoroState.workDuration;
                        showNotification('Break Complete!', 'Time to focus again (25 minutes)!');
                    }

                    pomodoroState.isBreak = !pomodoroState.isBreak;
                    playNotificationSound();
                    updatePomodoroUI();
                }
            }, 1000);
        }

        function pausePomodoro() {
            if (pomodoroState.timerInterval) {
                clearInterval(pomodoroState.timerInterval);
                pomodoroState.timerInterval = null;
                pomodoroState.isRunning = false;
                updatePomodoroUI();
            }
        }

        function resetPomodoro() {
            if (pomodoroState.timerInterval) {
                clearInterval(pomodoroState.timerInterval);
                pomodoroState.timerInterval = null;
            }

            pomodoroState.isRunning = false;
            pomodoroState.isBreak = false;
            pomodoroState.timeLeft = pomodoroState.workDuration;
            updatePomodoroUI();
        }

        function updatePomodoroUI() {
            const minutes = Math.floor(pomodoroState.timeLeft / 60);
            const seconds = pomodoroState.timeLeft % 60;
            document.getElementById('pomodoroTime').textContent =
                `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            document.getElementById('pomodoroPhase').textContent =
                pomodoroState.isBreak ? 'Break Time' : 'Focus Time';

            document.getElementById('pomodoroCount').textContent = pomodoroState.pomodoroCount;
            document.getElementById('breakCount').textContent = pomodoroState.breakCount;

            // Update button states
            document.getElementById('startPomodoro').classList.toggle('active', pomodoroState.isRunning);
            document.getElementById('pausePomodoro').classList.toggle('active', !pomodoroState.isRunning);
        }

        // ====== VOICE COMMANDS ======
        function toggleVoiceRecognition() {
            if (!recognition) {
                showNotification('Voice Not Supported', 'Voice recognition is not supported in this browser.');
                return;
            }

            if (isListening) {
                recognition.stop();
                isListening = false;
            } else {
                recognition.start();
                isListening = true;
                showNotification('Voice Active', 'Listening for commands...');
            }
            updateVoiceUI();
        }

        function handleVoiceCommand(event) {
            const command = event.results[0][0].transcript.toLowerCase();
            document.getElementById('voiceCommand').textContent = command;

            // Process commands
            if (command.includes('next task')) {
                showNotification('Voice Command', 'Moving to next task...');
                // Logic to highlight next task
            } else if (command.includes('mark done')) {
                showNotification('Voice Command', 'Marking current task as done...');
                // Logic to mark current task
            } else if (command.includes('prayer time')) {
                updateCurrentPrayer();
                showNotification('Voice Command', 'Showing next prayer time...');
            } else if (command.includes('open calendar')) {
                document.getElementById('calendarBtn').click();
                showNotification('Voice Command', 'Opening calendar...');
            } else if (command.includes('start timer')) {
                startPomodoro();
                showNotification('Voice Command', 'Starting Pomodoro timer...');
            } else {
                showNotification('Voice Command', `Command not recognized: "${command}"`);
            }

            // Send email notification for voice commands
            sendEmail(
                'Voice Command',
                `Umulkher used voice command: "${command}"\nTime: ${new Date().toLocaleString()}`,
                'voice',
                'Voice Control'
            );
        }

        function updateVoiceUI() {
            document.getElementById('voiceStatus').textContent =
                isListening ? 'Listening...' : 'Ready for commands';
            document.getElementById('voiceCommand').classList.toggle('voice-listening', isListening);
        }

        // ====== BACKUP/RESTORE ======
        function backupData() {
            const data = {
                completedTasks: completedTasks,
                skippedTasks: skippedTasks,
                notes: notes,
                achievements: achievements,
                habits: habits,
                files: files,
                quranData: quranData,
                messagesFromKhisa: messagesFromKhisa,
                backupDate: new Date().toISOString()
            };

            const dataStr = JSON.stringify(data, null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = `umulkher-backup-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            lastBackup = new Date().toISOString();
            localStorage.setItem('lastBackup', lastBackup);

            showNotification('Backup Created', 'All data has been backed up successfully.');

            // Send email notification
            sendEmail('Backup Created', `Backup created at ${new Date().toLocaleString()}`, 'backup', 'Backup System');
        }

        function restoreData(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = JSON.parse(e.target.result);

                    // Restore data
                    completedTasks = data.completedTasks || {};
                    skippedTasks = data.skippedTasks || {};
                    notes = data.notes || [];
                    achievements = data.achievements || {};
                    habits = data.habits || DEFAULT_HABITS;
                    files = data.files || [];
                    quranData = data.quranData || QURAN_DATA;
                    messagesFromKhisa = data.messagesFromKhisa || [];

                    // Save to localStorage
                    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
                    localStorage.setItem('skippedTasks', JSON.stringify(skippedTasks));
                    localStorage.setItem('notes', JSON.stringify(notes));
                    localStorage.setItem('achievements', JSON.stringify(achievements));
                    localStorage.setItem('habits', JSON.stringify(habits));
                    localStorage.setItem('files', JSON.stringify(files));
                    localStorage.setItem('quranData', JSON.stringify(quranData));
                    localStorage.setItem('messagesFromKhisa', JSON.stringify(messagesFromKhisa));

                    // Update UI
                    updateScheduleForDay(currentDay);
                    renderSchedule();
                    renderNotes();
                    renderAchievements();
                    renderFiles();
                    renderHabits();
                    renderQuranProgress();
                    updateProgress();

                    lastBackup = data.backupDate || new Date().toISOString();
                    localStorage.setItem('lastBackup', lastBackup);

                    showNotification('Data Restored', 'All data has been restored successfully.');

                    // Send email notification
                    sendEmail(
                        'Data Restored',
                        `Umulkher restored data from backup.\nBackup date: ${data.backupDate ? new Date(data.backupDate).toLocaleString() : 'Unknown'}\nRestore time: ${new Date().toLocaleString()}`,
                        'backup',
                        'Backup System'
                    );
                } catch (error) {
                    showNotification('Restore Error', 'Failed to restore data. Invalid backup file.');
                }
            };
            reader.readAsText(file);
        }

        // ====== MISSED TASKS CHECKER ======
        function startMissedTasksChecker() {
            setInterval(checkMissedTasks, 60000); // Check every minute
        }

        function checkMissedTasks() {
            const now = new Date();
            const today = new Date().toDateString();

            scheduleData.forEach((item, index) => {
                if (item.completed || item.skipped) return;

                const taskTime = parseTimeString(item.time);
                const timeDiff = (taskTime - now) / (1000 * 60); // Difference in minutes

                // If task is overdue by more than 15 minutes
                if (timeDiff < -15) {
                    const alarmKey = `${today}-${item.id}`;
                    if (!missedTasksAlarms[alarmKey]) {
                        missedTasksAlarms[alarmKey] = true;
                        localStorage.setItem('missedTasksAlarms', JSON.stringify(missedTasksAlarms));

                        // Create persistent notification
                        createPersistentNotification(
                            `Task Overdue: ${item.activity}`,
                            `Scheduled for ${item.time}. It's ${Math.abs(Math.round(timeDiff))} minutes late.`,
                            item.id
                        );

                        // Send email notification
                        sendEmail(
                            'MISSED TASK ALERT',
                            `CRITICAL: Umulkher missed important task!\nTask: "${item.activity}"\nScheduled: ${item.time}\nCurrent: ${now.toLocaleTimeString()}\nOverdue: ${Math.abs(Math.round(timeDiff))} minutes\nDay: ${DAYS[currentDay]}\n\nPlease check on her immediately.`,
                            'missed',
                            item.activity
                        );
                    }
                }
            });
        }

        function createPersistentNotification(title, message, taskId) {
            // Check if notification already exists
            if (document.getElementById(`notification-${taskId}`)) return;

            const notification = document.createElement('div');
            notification.id = `notification-${taskId}`;
            notification.className = 'notification show';
            notification.style.position = 'fixed';
            notification.style.top = '100px';
            notification.style.right = '30px';
            notification.style.zIndex = '2000';
            notification.style.background = 'var(--gradient-card)';
            notification.style.color = 'white';
            notification.style.padding = '20px';
            notification.style.borderRadius = '15px';
            notification.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
            notification.style.border = '2px solid var(--danger-color)';
            notification.style.maxWidth = '400px';

            notification.innerHTML = `
                <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="color: var(--danger-color); font-size: 1.5rem;">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>
                    <div>
                        <div style="font-weight: 800; font-size: 1.2rem; color: var(--text-light);">${title}</div>
                        <div style="color: var(--text-gray); margin-top: 5px;">${message}</div>
                    </div>
                    <button onclick="this.parentElement.parentElement.remove()" style="background: none; border: none; color: var(--text-gray); cursor: pointer; font-size: 1.2rem; margin-left: auto;">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;

            document.body.appendChild(notification);

            // Make notification stay until dismissed
            return notification;
        }

        // ====== EVENT LISTENERS SETUP ======
        function setupEventListeners() {
            // Day navigation
            document.querySelectorAll('.day-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const dayIndex = parseInt(this.getAttribute('data-day'));
                    currentDay = dayIndex;
                    updateScheduleForDay(dayIndex);
                    renderSchedule();
                    updateProgress();
                });
            });

            // Calendar navigation
            document.getElementById('prevMonth').addEventListener('click', () => {
                currentMonth--;
                if (currentMonth < 0) {
                    currentMonth = 11;
                    currentYear--;
                }
                renderCalendar();
            });

            document.getElementById('nextMonth').addEventListener('click', () => {
                currentMonth++;
                if (currentMonth > 11) {
                    currentMonth = 0;
                    currentYear++;
                }
                renderCalendar();
            });

            // Calendar button
            document.getElementById('calendarBtn').addEventListener('click', () => {
                showNotification('Calendar', 'Calendar view is already visible in the sidebar.');
            });

            // Pomodoro button
            document.getElementById('pomodoroBtn').addEventListener('click', () => {
                document.getElementById('pomodoroTimer').classList.toggle('active');
            });

            document.getElementById('closePomodoro').addEventListener('click', () => {
                document.getElementById('pomodoroTimer').classList.remove('active');
            });

            document.getElementById('startPomodoro').addEventListener('click', startPomodoro);
            document.getElementById('pausePomodoro').addEventListener('click', pausePomodoro);
            document.getElementById('resetPomodoro').addEventListener('click', resetPomodoro);

            // Voice button
            document.getElementById('voiceBtn').addEventListener('click', toggleVoiceRecognition);
            document.getElementById('closeVoice').addEventListener('click', () => {
                document.getElementById('voiceIndicator').classList.remove('active');
                if (isListening) {
                    recognition.stop();
                    isListening = false;
                }
            });

            // Reschedule modal
            document.getElementById('closeReschedule').addEventListener('click', () => {
                document.getElementById('rescheduleModal').classList.remove('active');
            });

            document.getElementById('cancelReschedule').addEventListener('click', () => {
                document.getElementById('rescheduleModal').classList.remove('active');
            });

            document.getElementById('confirmReschedule').addEventListener('click', function() {
                const taskIndex = this.dataset.task;
                const newDate = document.getElementById('rescheduleDate').value;
                const newTime = document.getElementById('rescheduleTime').value;
                const reason = document.getElementById('rescheduleReason').value;

                if (!newDate || !newTime) {
                    showNotification('Error', 'Please select both date and time.');
                    return;
                }

                const task = scheduleData[taskIndex];
                const oldTime = task.time;

                // Update task time (in a real app, you would update the schedule)
                task.rescheduled = {
                    from: oldTime,
                    to: `${newTime} ${new Date(newDate).toLocaleDateString('en-US', { weekday: 'long' })}`,
                    reason: reason
                };

                document.getElementById('rescheduleModal').classList.remove('active');
                showNotification('Task Rescheduled', `"${task.activity}" has been rescheduled to ${newTime} on ${new Date(newDate).toLocaleDateString()}`);

                // Send email notification
                sendEmail(
                    'Task Rescheduled',
                    `Umulkher rescheduled a task:\nTask: "${task.activity}"\nFrom: ${oldTime}\nTo: ${newTime} on ${newDate}\nReason: ${reason}`,
                    'reschedule',
                    task.activity
                );
            });

            // Profile button
            document.getElementById('profileBtn').addEventListener('click', (e) => {
                e.preventDefault();
                showNotification('Profile', 'User profile information will be available in the next update.');
            });

            // Settings button
            document.getElementById('settingsBtn').addEventListener('click', (e) => {
                e.preventDefault();
                showNotification('Settings', 'Application settings will be available in the next update.');
            });

            // Backup button
            document.getElementById('backupBtn').addEventListener('click', (e) => {
                e.preventDefault();
                document.getElementById('backupModal').classList.add('active');
                updateBackupInfo();
            });

            document.getElementById('closeBackupModal').addEventListener('click', () => {
                document.getElementById('backupModal').classList.remove('active');
            });

            document.getElementById('backupDataBtn').addEventListener('click', backupData);

            const restoreInput = document.createElement('input');
            restoreInput.type = 'file';
            restoreInput.accept = '.json';
            restoreInput.style.display = 'none';
            restoreInput.addEventListener('change', restoreData);
            document.getElementById('restoreDataBtn').addEventListener('click', () => restoreInput.click());

            // Logout button
            document.getElementById('logoutBtn').addEventListener('click', function(e) {
                e.preventDefault();
                handleLogout();
            });

            // Weather refresh
            document.getElementById('refreshWeather').addEventListener('click', renderWeather);

            // Notes
            document.getElementById('newNoteBtn').addEventListener('click', () => {
                document.getElementById('notesForm').style.display = 'block';
                document.getElementById('noteTitle').focus();
            });

            document.getElementById('saveNoteBtn').addEventListener('click', saveNote);
            document.getElementById('cancelNoteBtn').addEventListener('click', () => {
                document.getElementById('notesForm').style.display = 'none';
                document.getElementById('noteTitle').value = '';
                document.getElementById('noteContent').value = '';
            });

            // File upload
            document.getElementById('uploadArea').addEventListener('click', () => {
                document.getElementById('fileInput').click();
            });

            document.getElementById('fileInput').addEventListener('change', handleFileUpload);
            document.getElementById('uploadBtn').addEventListener('click', () => {
                document.getElementById('fileInput').click();
            });

            // Quran navigation
            document.getElementById('quranPrev').addEventListener('click', () => {
                recordQuranReading(-1);
            });

            document.getElementById('quranNext').addEventListener('click', () => {
                recordQuranReading(1);
            });

            // Chat with Khisa buttons
            document.getElementById('chatRequestBtn').addEventListener('click', () => {
                showNotification('Chat Request', 'Khisa has been notified that you want to chat. He will contact you soon!');

                // Send email to Khisa
            sendEmail('Chat Request', 'Umulkher wants to chat with you!\nTime: ' + new Date().toLocaleTimeString(), 'communication', 'Connect with Khisa');
            });

            document.getElementById('callRequestBtn').addEventListener('click', () => {
                showNotification('Call Request', 'Khisa has been notified that you want to call. He will contact you soon!');

                // Send email to Khisa
            sendEmail('Call Request', 'Umulkher wants to call you!\nTime: ' + new Date().toLocaleTimeString(), 'communication', 'Connect with Khisa');
            });

            // Quick action buttons
            document.getElementById('exportBtn').addEventListener('click', exportToPDF);
            document.getElementById('printBtn').addEventListener('click', printSchedule);
            document.getElementById('reminderBtn').addEventListener('click', setCustomReminder);
            document.getElementById('statsBtn').addEventListener('click', showStats);

            // Footer links
            document.getElementById('aboutLink').addEventListener('click', function(e) {
                e.preventDefault();
                showNotification('About This App',
                    'This app was designed specifically for Umulkher to organize her daily schedule efficiently. ' +
                    'Developed by Mukoya Khisa with ❤️. Features include: prayer times, study schedules, weather, calendar, notes, achievements, file upload, habit tracker, Quran tracker, and email notifications.');
            });

            document.getElementById('helpLink').addEventListener('click', function(e) {
                e.preventDefault();
                showNotification('Help & Support',
                    'For assistance, contact the developer: Mukoya Khisa at sir.mukoyakhisa@gmail.com\n\nKeyboard Shortcuts:\n• Ctrl+P: Print schedule\n• Ctrl+E: Export PDF\n• Ctrl+S: Show statistics\n• Escape: Close modals\n• Number keys 1-7: Switch days');
            });

            document.getElementById('privacyLink').addEventListener('click', function(e) {
                e.preventDefault();
                showNotification('Privacy & Security',
                    'Your data is stored locally in your browser and never shared with third parties. ' +
                    'Email notifications are sent only to the specified address. ' +
                    'All credentials are securely handled. Back up your data regularly.');
            });

            // Close notification
            document.getElementById('closeNotification').addEventListener('click', function() {
                document.getElementById('notification').classList.remove('show');
            });

            // Close modals when clicking outside
            document.getElementById('backupModal').addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('active');
                }
            });

            document.getElementById('rescheduleModal').addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('active');
                }
            });
        }

        // ====== UTILITY FUNCTIONS ======
        function updateClock() {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-US', {
                hour12: true,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });

            const dateStr = now.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            document.getElementById('currentTime').textContent = timeStr;
            document.getElementById('currentDate').innerHTML = `<i class="fas fa-calendar"></i> ${dateStr}`;
        }

        function parseTimeString(timeStr) {
            const [time, modifier] = timeStr.split(' ');
            let [hours, minutes] = time.split(':').map(Number);

            if (modifier === 'PM' && hours < 12) hours += 12;
            if (modifier === 'AM' && hours === 12) hours = 0;

            const now = new Date();
            return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
        }

        function getTaskStatus(taskTime, completed, skipped) {
            if (completed) return 'completed';
            if (skipped) return 'skipped';

            const now = new Date();
            const timeDiff = taskTime - now;
            const fiveMinutes = 5 * 60 * 1000;

            if (timeDiff < 0) {
                return Math.abs(timeDiff) < 30 * 60 * 1000 ? 'in-progress' : 'pending';
            } else if (timeDiff <= fiveMinutes) {
                return 'in-progress';
            } else {
                return 'pending';
            }
        }

        function formatStatus(status) {
            switch(status) {
                case 'pending': return 'Pending';
                case 'in-progress': return 'In Progress';
                case 'completed': return 'Completed';
                case 'skipped': return 'Skipped';
                default: return 'Pending';
            }
        }

        function getActivityIcon(category, activity) {
            if (activity.includes('Prayer') || activity.includes('prayer')) {
                return 'fas fa-mosque';
            } else if (category === 'study') {
                return 'fas fa-book';
            } else if (category === 'family') {
                return 'fas fa-users';
            } else if (category === 'personal') {
                return 'fas fa-user';
            } else if (category === 'break') {
                return 'fas fa-coffee';
            } else if (category === 'chat') {
                return 'fas fa-comments';
            }
            return 'fas fa-tasks';
        }

        function updateProgress() {
            const totalTasks = scheduleData.length;
            const completedCount = scheduleData.filter(item => item.completed).length;
            const skippedCount = scheduleData.filter(item => item.skipped).length;
            const remainingCount = totalTasks - completedCount - skippedCount;
            const progressPercent = Math.round((completedCount / totalTasks) * 100);

            document.getElementById('progressPercent').textContent = `${progressPercent}%`;
            document.getElementById('progressFill').style.width = `${progressPercent}%`;
            document.getElementById('completedTasks').textContent = `${completedCount} completed`;
            document.getElementById('remainingTasks').textContent = `${remainingCount} remaining`;

            const progressFill = document.getElementById('progressFill');
            if (progressPercent < 30) {
                progressFill.style.background = "linear-gradient(90deg, #e74c3c 0%, #c0392b 100%)";
            } else if (progressPercent < 70) {
                progressFill.style.background = "linear-gradient(90deg, #f39c12 0%, #e67e22 100%)";
            } else {
                progressFill.style.background = "linear-gradient(90deg, #1e6b52 0%, #d4af37 100%)";
            }
        }

        function updateCurrentPrayer() {
            const now = new Date();
            const prayerTimes = calculatePrayerTimes();
            let nextPrayer = null;

            for (const prayer of prayerTimes) {
                const prayerTime = parseTimeString(prayer.time);
                if (prayerTime > now) {
                    nextPrayer = prayer;
                    break;
                }
            }

            if (!nextPrayer) {
                nextPrayer = prayerTimes[0];
            }

            document.getElementById('currentPrayer').innerHTML =
                `<i class="fas fa-clock"></i> <span>Next prayer: ${nextPrayer.name} at ${nextPrayer.time}</span>`;
        }

        function checkForNotifications() {
            const now = new Date();
            const prayerTimes = calculatePrayerTimes();

            // Check prayer times
            prayerTimes.forEach(prayer => {
                const prayerTime = parseTimeString(prayer.time);
                const timeDiff = (prayerTime - now) / (1000 * 60);

                if (timeDiff > 0 && timeDiff <= 10) {
                    const notificationKey = `prayer-${prayer.name}-${prayerTime.getDate()}`;
                    if (!localStorage.getItem(notificationKey)) {
                        showNotification('Prayer Reminder', `${prayer.name} prayer in ${Math.round(timeDiff)} minutes`);
                        localStorage.setItem(notificationKey, 'shown');
                        setTimeout(() => localStorage.removeItem(notificationKey), 2 * 60 * 60 * 1000);
                    }
                }
            });

            // Check schedule items
            scheduleData.forEach((item, index) => {
                if (item.completed || item.skipped) return;

                const taskTime = parseTimeString(item.time);
                const timeDiff = (taskTime - now) / (1000 * 60);

                if (timeDiff > 0 && timeDiff <= 15) {
                    const notificationKey = `task-${item.id}`;
                    if (!localStorage.getItem(notificationKey)) {
                        showNotification('Upcoming Task', `${item.activity} at ${item.time}`);
                        localStorage.setItem(notificationKey, 'shown');
                        setTimeout(() => localStorage.removeItem(notificationKey), 60 * 60 * 1000);
                    }
                }
            });

            updateCurrentPrayer();
        }

        function checkForKhisaMessages() {
            const unreadMessages = messagesFromKhisa.filter(msg => !msg.read);
            if (unreadMessages.length > 0) {
                const latestMessage = unreadMessages[unreadMessages.length - 1];
                showNotification('Message from Khisa', latestMessage.text);
                latestMessage.read = true;
                localStorage.setItem('messagesFromKhisa', JSON.stringify(messagesFromKhisa));
            }
        }

        function setReminderForTask(taskIndex) {
            const task = scheduleData[taskIndex];
            showNotification('Reminder Set', `Reminder set for "${task.activity}" at ${task.time}`);

            sendEmail(
                'Reminder Set',
                `Umulkher set a reminder for: "${task.activity}" at ${task.time}\nDay: ${DAYS[currentDay]}`,
                'reminder',
                task.activity
            );
        }

        function setCustomReminder() {
            showNotification('Custom Reminder',
                'You can set custom reminders for important tasks. This feature will be available in the next update!');
        }

        function showStats() {
            const totalTasks = scheduleData.length;
            const completedCount = scheduleData.filter(item => item.completed).length;
            const skippedCount = scheduleData.filter(item => item.skipped).length;
            const completionRate = Math.round((completedCount / totalTasks) * 100);

            showNotification('Today\'s Statistics',
                `Completed: ${completedCount} | Skipped: ${skippedCount} | Remaining: ${totalTasks - completedCount - skippedCount} | Rate: ${completionRate}%`);
        }

        function exportToPDF() {
            showNotification('Export Started', 'Generating PDF of your schedule...');

            setTimeout(() => {
                showNotification('Export Complete', 'PDF has been generated. You can download it now.');

                const today = new Date();
                const dateStr = today.toISOString().split('T')[0];
                const dayName = DAYS[currentDay];

                const pdfContent = `
                    Umulkher's Daily Schedule - ${dayName}, ${dateStr}
                    ================================================

                    DAILY SCHEDULE:
                    ${scheduleData.map(item => {
                        const status = item.completed ? '✓' : item.skipped ? '→' : '○';
                        return `${status} ${item.time} - ${item.activity}`;
                    }).join('\n')}

                    PRAYER TIMES:
                    ${calculatePrayerTimes().map(prayer => `${prayer.name}: ${prayer.time}`).join('\n')}

                    NOTES:
                    ${notes.slice(0, 3).map(note => `• ${note.title}: ${note.content.substring(0, 50)}...`).join('\n')}

                    HABITS TRACKED TODAY:
                    ${Object.keys(JSON.parse(localStorage.getItem('todayHabits') || '{}')).length} of ${habits.length} completed

                    QURAN PROGRESS:
                    Page ${quranData.currentPage} of ${quranData.totalPages} (${Math.round((quranData.currentPage / quranData.totalPages) * 100)}%)

                    Developed with ❤️ by Mukoya Khisa
                    Email: sir.mukoyakhisa@gmail.com
                    Generated: ${new Date().toLocaleString()}
                `;

                const blob = new Blob([pdfContent], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `Umulkher-Schedule-${dateStr}.txt`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }, 2000);
        }

        function printSchedule() {
            showNotification('Print', 'Preparing schedule for printing...');
            setTimeout(() => {
                window.print();
            }, 1000);
        }

        function updateBackupInfo() {
            const lastBackupDate = localStorage.getItem('lastBackup');
            document.getElementById('lastBackupDate').textContent =
                lastBackupDate ? new Date(lastBackupDate).toLocaleString() : 'Never';

            // Calculate data size
            const data = {
                completedTasks,
                skippedTasks,
                notes,
                achievements,
                habits,
                files,
                quranData,
                messagesFromKhisa
            };
            const dataSize = JSON.stringify(data).length;
            document.getElementById('dataSize').textContent = formatFileSize(dataSize);
        }

        function showNotification(title, message) {
            const notification = document.getElementById('notification');
            const notificationTitle = document.getElementById('notificationTitle');
            const notificationMessage = document.getElementById('notificationMessage');

            notificationTitle.textContent = title;
            notificationMessage.textContent = message;

            notification.classList.add('show');
            playNotificationSound();

            setTimeout(() => {
                notification.classList.remove('show');
            }, 8000);
        }

        function playNotificationSound() {
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
                oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.2);
                oscillator.frequency.exponentialRampToValueAtTime(900, audioContext.currentTime + 0.3);

                oscillator.type = 'sine';

                gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.05);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.6);

                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.6);
            } catch (e) {
                console.log("Audio context not supported");
            }
        }

        function shakeElement(element) {
            element.style.animation = 'none';
            setTimeout(() => {
                element.style.animation = 'shake 0.5s ease-in-out';
            }, 10);
        }

        function animatePageElements() {
            const elements = document.querySelectorAll('.time-item, .sidebar-card, .header-btn');
            elements.forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 100 + index * 50);
            });
        }

        // Add keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'p') {
                e.preventDefault();
                printSchedule();
            }

            if (e.ctrlKey && e.key === 'e') {
                e.preventDefault();
                exportToPDF();
            }

            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                showStats();
            }

            if (e.key === 'Escape') {
                document.getElementById('backupModal').classList.remove('active');
                document.getElementById('rescheduleModal').classList.remove('active');
                document.getElementById('notification').classList.remove('show');
                document.getElementById('pomodoroTimer').classList.remove('active');
                document.getElementById('voiceIndicator').classList.remove('active');
            }

            if (e.key >= '1' && e.key <= '7') {
                const dayIndex = parseInt(e.key) - 1;
                if (dayIndex >= 0 && dayIndex <= 6) {
                    currentDay = dayIndex;
                    updateScheduleForDay(dayIndex);
                    renderSchedule();
                    updateProgress();
                }
            }

            if (e.ctrlKey && e.key === 'm') {
                e.preventDefault();
                document.getElementById('newNoteBtn').click();
            }
        });

        // Add touch support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        document.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });

        document.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    currentDay = (currentDay + 1) % 7;
                } else {
                    currentDay = (currentDay - 1 + 7) % 7;
                }

                updateScheduleForDay(currentDay);
                renderSchedule();
                updateProgress();
            }
        }


        // Add this at the very end of your script, before the closing </script> tag
        (function() {
            // Create button
            const scrollBtn = document.createElement('button');
            scrollBtn.id = 'scrollToTopBtn';
            scrollBtn.className = 'scroll-to-top';
            scrollBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
            scrollBtn.setAttribute('aria-label', 'Scroll to top');
            scrollBtn.setAttribute('title', 'Scroll to top');
            document.body.appendChild(scrollBtn);

            // Add CSS if not already added
            if (!document.querySelector('#scroll-to-top-style')) {
                const style = document.createElement('style');
                style.id = 'scroll-to-top-style';
                style.textContent = `
                    .scroll-to-top {
                        position: fixed;
                        bottom: 30px;
                        right: 30px;
                        width: 60px;
                        height: 60px;
                        background: linear-gradient(135deg, #d4af37 0%, #c0c0c0 100%);
                        border-radius: 50%;
                        border: 2px solid #b8941f;
                        color: #0a0a0a;
                        font-size: 1.5rem;
                        cursor: pointer;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 1000;
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 175, 55, 0.3);
                        opacity: 0;
                        visibility: hidden;
                        transform: translateY(20px);
                    }
                    .scroll-to-top.visible {
                        opacity: 1;
                        visibility: visible;
                        transform: translateY(0);
                    }
                    .scroll-to-top:hover {
                        transform: translateY(-5px) scale(1.1);
                        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(212, 175, 55, 0.4);
                        border-color: #d4af37;
                    }
                    @keyframes bounce {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-10px); }
                    }
                    .scroll-to-top.pulse {
                        animation: bounce 1s ease-in-out 3;
                    }
                `;
                document.head.appendChild(style);
            }

            // Show/hide button
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    scrollBtn.classList.add('visible');
                } else {
                    scrollBtn.classList.remove('visible');
                }
            });

            // Scroll to top functionality
            scrollBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                scrollBtn.classList.add('pulse');
                setTimeout(() => scrollBtn.classList.remove('pulse'), 3000);
            });
        })();

            // ============================================================================
           // PERFECT ONBOARDING TOUR - SMOOTH & PRODUCTION READY
          // ============================================================================

            class OnboardingTour {
                constructor() {
                    this.currentStep = 0;
                    this.isActive = false;
                    this.steps = [];
                    this.highlightedElement = null;
                    this.isTransitioning = false;
                    this.tourId = 'umulkher-tour-v1';

                    // Bind methods
                    this.next = this.next.bind(this);
                    this.prev = this.prev.bind(this);
                    this.start = this.start.bind(this);
                    this.end = this.end.bind(this);
                    this.skip = this.skip.bind(this);
                    this.restart = this.restart.bind(this);

                    // Initialize
                    this.init();
                }

                init() {
                    // Define tour steps
                    this.steps = [
                        {
                            id: 'welcome',
                            title: "🌟 Welcome to Your Daily Schedule!",
                            message: "This is your personal command center for organizing prayers, studies, family time, and personal growth. Let's explore!",
                            element: "#logo",
                            position: "bottom",
                            tooltip: "right",
                            animation: "fadeIn",
                            duration: 4000,
                            action: () => this.scrollToElement("#logo")
                        },
                        {
                            id: 'timeline',
                            title: "📅 Your Daily Timeline",
                            message: "Each color represents different activities:<br>🟢 Prayer & Spiritual<br>🔵 Study & Learning<br>🟣 Family & Personal<br>🟡 Breaks & Rest",
                            element: "#scheduleTimeline",
                            position: "right",
                            tooltip: "right",
                            animation: "slideInRight",
                            duration: 4500,
                            action: () => this.scrollToElement("#scheduleTimeline")
                        },
                        {
                            id: 'tasks',
                            title: "✅ Manage Tasks Easily",
                            message: "• <strong>Checkbox</strong> - Mark as complete<br>• <strong>Skip</strong> - Reschedule for later<br>• <strong>View Details</strong> - More information<br>• <strong>Remind</strong> - Set notifications",
                            element: ".time-item:first-child .task-meta",
                            position: "top",
                            tooltip: "top",
                            animation: "pulse",
                            duration: 5000,
                            action: () => {
                                this.scrollToElement(".time-item:first-child");
                                setTimeout(() => {
                                    const detailsBtn = document.querySelector('.time-item:first-child .task-details-btn');
                                    if (detailsBtn) detailsBtn.click();
                                }, 500);
                            }
                        },
                        {
                            id: 'days',
                            title: "📆 Switch Days Instantly",
                            message: "Each day has different subjects:<br>• Monday: Physics, Kiswahili<br>• Tuesday: Chemistry, English<br>• Wednesday: Biology, Physics<br>• Thursday: Mathematics, Chemistry",
                            element: ".day-navigation",
                            position: "bottom",
                            tooltip: "bottom",
                            animation: "bounce",
                            duration: 4000,
                            action: () => this.scrollToElement(".day-navigation")
                        },
                        {
                            id: 'prayer',
                            title: "🕌 Prayer Times & Calendar",
                            message: "<strong>Auto-detect location</strong> for accurate prayer times.<br>Calendar shows all your scheduled events.<br>Red dot = tasks scheduled for that day.",
                            element: ".prayer-times",
                            position: "left",
                            tooltip: "left",
                            animation: "fadeIn",
                            duration: 4500,
                            action: () => this.scrollToElement(".prayer-times")
                        },
                        {
                            id: 'weather',
                            title: "🌤️ Real-time Weather",
                            message: "Automatically shows Kitale weather.<br>Click refresh for latest updates.<br>3-day forecast helps plan outdoor activities.",
                            element: ".weather-section",
                            position: "left",
                            tooltip: "left",
                            animation: "slideInLeft",
                            duration: 4000,
                            action: () => this.scrollToElement(".weather-section")
                        },
                        {
                            id: 'progress',
                            title: "📊 Track Your Growth",
                            message: "<strong>Achievements</strong> - Earn badges for consistency<br><strong>Habits</strong> - Build daily routines<br><strong>Quran Tracker</strong> - Monitor reading progress<br><strong>Notes</strong> - Jot down important thoughts",
                            element: ".achievements-section",
                            position: "left",
                            tooltip: "left",
                            animation: "fadeIn",
                            duration: 5000,
                            action: () => this.scrollToElement(".achievements-section")
                        },
                        {
                            id: 'tools',
                            title: "⚡ Productivity Tools",
                            message: "<strong>Pomodoro Timer</strong> - 25 min focus, 5 min break<br><strong>Voice Commands</strong> - 'Next task', 'Mark done'<br><strong>File Upload</strong> - Store study materials<br><strong>Backup</strong> - Never lose your data",
                            element: "#pomodoroBtn",
                            position: "bottom",
                            tooltip: "top",
                            animation: "pulse",
                            duration: 4500,
                            action: () => this.scrollToElement("#pomodoroBtn")
                        },
                        {
                            id: 'connect',
                            title: "💬 Connect with Khisa",
                            message: "<strong>Request Chat</strong> - Instant messaging<br><strong>Request Call</strong> - Voice conversation<br>Khisa gets email notification immediately<br>He's always ready to help!",
                            element: ".chat-section",
                            position: "left",
                            tooltip: "left",
                            animation: "slideInLeft",
                            duration: 4000,
                            action: () => this.scrollToElement(".chat-section")
                        },
                        {
                            id: 'controls',
                            title: "⚙️ Your Control Center",
                            message: "• <strong>Profile</strong> - Personal settings<br>• <strong>Settings</strong> - Customize app<br>• <strong>Backup</strong> - Save all data<br>• <strong>Logout</strong> - Secure exit",
                            element: ".user-info",
                            position: "bottom",
                            tooltip: "bottom",
                            animation: "fadeIn",
                            duration: 4000,
                            action: () => this.scrollToElement(".user-info")
                        },
                        {
                            id: 'complete',
                            title: "🎉 You're Ready to Shine!",
                            message: "<strong>Remember:</strong><br>• Data saves automatically<br>• Backup weekly<br>• Use Pomodoro for focus<br>• Connect with Khisa anytime<br><br>Start planning your perfect day!",
                            element: null,
                            position: "center",
                            tooltip: "center",
                            animation: "celebrate",
                            duration: 5000,
                            action: () => window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                    ];

                    // Create DOM elements
                    this.createTourElements();

                    // Setup event listeners
                    this.setupEventListeners();

                    // Check if should auto-start
                    this.checkAutoStart();
                }

                createTourElements() {
                    // Create overlay
                    if (!document.getElementById('tourOverlay')) {
                        const overlay = document.createElement('div');
                        overlay.id = 'tourOverlay';
                        overlay.className = 'tour-overlay';
                        overlay.innerHTML = '<div class="tour-cutout"></div>';
                        document.body.appendChild(overlay);
                    }

                    // Create tooltip
                    if (!document.getElementById('tourTooltip')) {
                        const tooltip = document.createElement('div');
                        tooltip.id = 'tourTooltip';
                        tooltip.className = 'tour-tooltip';
                        tooltip.innerHTML = `
                            <div class="tour-tooltip-header">
                                <h3 class="tour-tooltip-title" id="tourTitle"></h3>
                                <div class="tour-tooltip-progress">
                                    <span id="tourCurrentStep">1</span> / <span id="tourTotalSteps">${this.steps.length}</span>
                                </div>
                                <button class="tour-close" id="tourClose">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                            <div class="tour-tooltip-body">
                                <div class="tour-tooltip-message" id="tourMessage"></div>
                                <div class="tour-tooltip-illustration">
                                    <i class="fas fa-star" id="tourIcon"></i>
                                </div>
                            </div>
                            <div class="tour-tooltip-footer">
                                <button class="tour-btn tour-skip" id="tourSkip">
                                    <i class="fas fa-forward"></i> Skip Tour
                                </button>
                                <div class="tour-tooltip-navigation">
                                    <button class="tour-btn tour-prev" id="tourPrev">
                                        <i class="fas fa-arrow-left"></i> Back
                                    </button>
                                    <button class="tour-btn tour-next" id="tourNext">
                                        Next <i class="fas fa-arrow-right"></i>
                                    </button>
                                    <button class="tour-btn tour-finish" id="tourFinish">
                                        Let's Go! <i class="fas fa-rocket"></i>
                                    </button>
                                </div>
                            </div>
                        `;
                        document.body.appendChild(tooltip);
                    }

                    // Create pointer
                    if (!document.getElementById('tourPointer')) {
                        const pointer = document.createElement('div');
                        pointer.id = 'tourPointer';
                        pointer.className = 'tour-pointer';
                        document.body.appendChild(pointer);
                    }

                    // Add restart button to sidebar if doesn't exist
                    if (!document.getElementById('tourRestartBtn')) {
                        const restartBtn = document.createElement('button');
                        restartBtn.id = 'tourRestartBtn';
                        restartBtn.className = 'header-btn';
                        restartBtn.style.cssText = 'width: 100%; margin-top: 10px; display: none;';
                        restartBtn.innerHTML = '<i class="fas fa-redo"></i> Restart Tutorial';

                        // Find a good place to insert it (maybe in Quick Actions)
                        const quickActions = document.querySelector('.quick-actions');
                        if (quickActions) {
                            quickActions.parentNode.insertBefore(restartBtn, quickActions.nextSibling);
                        } else {
                            // Add to sidebar
                            const sidebar = document.querySelector('.sidebar');
                            if (sidebar) {
                                const card = document.createElement('div');
                                card.className = 'sidebar-card';
                                card.innerHTML = '<h3 class="card-title"><i class="fas fa-graduation-cap"></i> Tutorial</h3>';
                                card.appendChild(restartBtn);
                                sidebar.appendChild(card);
                            }
                        }
                    }
                }

                setupEventListeners() {
                    // Navigation
                    document.getElementById('tourNext').addEventListener('click', this.next);
                    document.getElementById('tourPrev').addEventListener('click', this.prev);
                    document.getElementById('tourFinish').addEventListener('click', this.end);
                    document.getElementById('tourSkip').addEventListener('click', this.skip);
                    document.getElementById('tourClose').addEventListener('click', this.skip);
                    document.getElementById('tourRestartBtn').addEventListener('click', this.restart);

                    // Keyboard
                    document.addEventListener('keydown', (e) => {
                        if (!this.isActive) return;

                        switch(e.key) {
                            case 'Escape':
                                this.skip();
                                break;
                            case 'ArrowRight':
                            case ' ':
                                e.preventDefault();
                                this.next();
                                break;
                            case 'ArrowLeft':
                                e.preventDefault();
                                this.prev();
                                break;
                        }
                    });

                    // Click on highlighted element to proceed
                    document.addEventListener('click', (e) => {
                        if (!this.isActive || this.isTransitioning) return;

                        if (this.highlightedElement && this.highlightedElement.contains(e.target)) {
                            this.next();
                        }
                    });
                }

                checkAutoStart() {
                    const hasSeenTour = localStorage.getItem(this.tourId);
                    const isFirstLogin = localStorage.getItem('isFirstLogin') === 'true';

                    if ((!hasSeenTour && userAuthenticated) || isFirstLogin) {
                        // Delay to let page load completely
                        setTimeout(() => this.start(), 1800);
                        localStorage.setItem('isFirstLogin', 'false');
                    } else if (hasSeenTour) {
                        // Show restart button
                        document.getElementById('tourRestartBtn').style.display = 'block';
                    }
                }

                start() {
                    if (this.isActive) return;

                    this.isActive = true;
                    this.currentStep = 0;

                    // Show elements with animation
                    document.getElementById('tourOverlay').classList.add('active');
                    setTimeout(() => {
                        document.getElementById('tourTooltip').classList.add('active');
                    }, 300);

                    // Update total steps
                    document.getElementById('tourTotalSteps').textContent = this.steps.length;

                    // Show current step
                    this.showStep();

                    // Mark as seen
                    localStorage.setItem(this.tourId, 'true');

                    // Show restart button
                    document.getElementById('tourRestartBtn').style.display = 'block';

                    // Send notification
                    this.sendNotification('Tour started', 'Interactive tutorial has begun');
                }

                showStep() {
                    if (this.currentStep >= this.steps.length) {
                        this.end();
                        return;
                    }

                    this.isTransitioning = true;

                    const step = this.steps[this.currentStep];

                    // Update UI
                    document.getElementById('tourTitle').textContent = step.title;
                    document.getElementById('tourMessage').innerHTML = step.message;
                    document.getElementById('tourCurrentStep').textContent = this.currentStep + 1;
                    document.getElementById('tourIcon').className = this.getStepIcon(step.id);

                    // Update buttons
                    document.getElementById('tourPrev').style.display = this.currentStep === 0 ? 'none' : 'flex';
                    document.getElementById('tourNext').style.display = this.currentStep === this.steps.length - 1 ? 'none' : 'flex';
                    document.getElementById('tourFinish').style.display = this.currentStep === this.steps.length - 1 ? 'flex' : 'none';

                    // Remove previous highlight
                    if (this.highlightedElement) {
                        this.highlightedElement.classList.remove('tour-highlighted');
                        this.highlightedElement.style.zIndex = '';
                    }

                    // Execute step action
                    if (step.action) {
                        step.action();
                    }

                    // Highlight element
                    if (step.element) {
                        this.highlightElement(step);
                    } else {
                        // Final step - center everything
                        this.positionCenter();
                    }

                    // Add animation class
                    document.getElementById('tourTooltip').className = `tour-tooltip active ${step.animation}`;

                    // Auto-advance after duration (optional)
                    if (step.duration) {
                        clearTimeout(this.autoAdvanceTimer);
                        this.autoAdvanceTimer = setTimeout(() => this.next(), step.duration);
                    }

                    // Transition complete
                    setTimeout(() => {
                        this.isTransitioning = false;
                    }, 500);
                }

                highlightElement(step) {
                    const element = document.querySelector(step.element);
                    if (!element) {
                        console.warn(`Tour element not found: ${step.element}`);
                        setTimeout(() => this.next(), 1000);
                        return;
                    }

                    this.highlightedElement = element;

                    // Add highlight class
                    element.classList.add('tour-highlighted');
                    element.style.zIndex = '10002';

                    // Calculate positions
                    const rect = element.getBoundingClientRect();
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

                    // Update cutout
                    const overlay = document.getElementById('tourOverlay');
                    overlay.style.setProperty('--cutout-top', `${rect.top + scrollTop - 10}px`);
                    overlay.style.setProperty('--cutout-left', `${rect.left + scrollLeft - 10}px`);
                    overlay.style.setProperty('--cutout-width', `${rect.width + 20}px`);
                    overlay.style.setProperty('--cutout-height', `${rect.height + 20}px`);

                    // Position tooltip
                    this.positionTooltip(element, step.tooltip);

                    // Position pointer
                    this.positionPointer(element, step.position);

                    // Ensure element is visible
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'center'
                    });
                }

                positionTooltip(element, position) {
                    const tooltip = document.getElementById('tourTooltip');
                    const tooltipRect = tooltip.getBoundingClientRect();
                    const elementRect = element.getBoundingClientRect();

                    let top, left;
                    const padding = 25;
                    const viewportPadding = 20;

                    switch(position) {
                        case 'top':
                            top = elementRect.top - tooltipRect.height - padding;
                            left = elementRect.left + (elementRect.width / 2) - (tooltipRect.width / 2);
                            break;
                        case 'bottom':
                            top = elementRect.bottom + padding;
                            left = elementRect.left + (elementRect.width / 2) - (tooltipRect.width / 2);
                            break;
                        case 'left':
                            top = elementRect.top + (elementRect.height / 2) - (tooltipRect.height / 2);
                            left = elementRect.left - tooltipRect.width - padding;
                            break;
                        case 'right':
                            top = elementRect.top + (elementRect.height / 2) - (tooltipRect.height / 2);
                            left = elementRect.right + padding;
                            break;
                        default:
                            // Center
                            top = window.innerHeight / 2 - tooltipRect.height / 2;
                            left = window.innerWidth / 2 - tooltipRect.width / 2;
                    }

                    // Keep within viewport
                    top = Math.max(viewportPadding, Math.min(top, window.innerHeight - tooltipRect.height - viewportPadding));
                    left = Math.max(viewportPadding, Math.min(left, window.innerWidth - tooltipRect.width - viewportPadding));

                    tooltip.style.top = `${top}px`;
                    tooltip.style.left = `${left}px`;
                }

                positionPointer(element, position) {
                    const pointer = document.getElementById('tourPointer');
                    const elementRect = element.getBoundingClientRect();

                    pointer.className = `tour-pointer ${position} active`;

                    switch(position) {
                        case 'top':
                            pointer.style.top = `${elementRect.bottom}px`;
                            pointer.style.left = `${elementRect.left + elementRect.width / 2 - 10}px`;
                            break;
                        case 'bottom':
                            pointer.style.top = `${elementRect.top - 20}px`;
                            pointer.style.left = `${elementRect.left + elementRect.width / 2 - 10}px`;
                            break;
                        case 'left':
                            pointer.style.top = `${elementRect.top + elementRect.height / 2 - 10}px`;
                            pointer.style.left = `${elementRect.right}px`;
                            break;
                        case 'right':
                            pointer.style.top = `${elementRect.top + elementRect.height / 2 - 10}px`;
                            pointer.style.left = `${elementRect.left - 20}px`;
                            break;
                    }
                }

                positionCenter() {
                    const tooltip = document.getElementById('tourTooltip');
                    const tooltipRect = tooltip.getBoundingClientRect();

                    tooltip.style.top = `${window.innerHeight / 2 - tooltipRect.height / 2}px`;
                    tooltip.style.left = `${window.innerWidth / 2 - tooltipRect.width / 2}px`;

                    // Hide pointer
                    document.getElementById('tourPointer').classList.remove('active');

                    // Remove cutout
                    document.getElementById('tourOverlay').style.cssText = '';
                }

                next() {
                    if (this.isTransitioning || this.currentStep >= this.steps.length - 1) {
                        this.end();
                        return;
                    }

                    this.currentStep++;
                    this.showStep();

                    // Play sound (optional)
                    this.playSound('next');
                }

                prev() {
                    if (this.isTransitioning || this.currentStep <= 0) return;

                    this.currentStep--;
                    this.showStep();

                    // Play sound (optional)
                    this.playSound('prev');
                }

                end() {
                    if (!this.isActive) return;

                    this.isActive = false;
                    this.isTransitioning = false;

                    // Remove highlights
                    if (this.highlightedElement) {
                        this.highlightedElement.classList.remove('tour-highlighted');
                        this.highlightedElement.style.zIndex = '';
                    }

                    // Hide elements with fade out
                    document.getElementById('tourTooltip').classList.remove('active');
                    setTimeout(() => {
                        document.getElementById('tourOverlay').classList.remove('active');
                        document.getElementById('tourPointer').classList.remove('active');
                    }, 300);

                    // Clear auto-advance timer
                    clearTimeout(this.autoAdvanceTimer);

                    // Show success notification
                    this.sendNotification('Tour completed', 'You are now ready to use your daily schedule!');

                    // Celebration effect
                    this.celebrate();
                }

                skip() {
                    if (confirm('Skip the tutorial? You can restart it anytime using the "Restart Tutorial" button.')) {
                        this.end();
                    }
                }

                restart() {
                    if (confirm('Restart the tutorial?')) {
                        this.currentStep = 0;
                        this.start();
                    }
                }

                // Helper methods
                scrollToElement(selector) {
                    const element = document.querySelector(selector);
                    if (element) {
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center',
                            inline: 'center'
                        });
                    }
                }

                getStepIcon(stepId) {
                    const icons = {
                        'welcome': 'fas fa-star',
                        'timeline': 'fas fa-calendar-alt',
                        'tasks': 'fas fa-tasks',
                        'days': 'fas fa-calendar-day',
                        'prayer': 'fas fa-mosque',
                        'weather': 'fas fa-cloud-sun',
                        'progress': 'fas fa-chart-line',
                        'tools': 'fas fa-tools',
                        'connect': 'fas fa-comments',
                        'controls': 'fas fa-cog',
                        'complete': 'fas fa-trophy'
                    };
                    return icons[stepId] || 'fas fa-info-circle';
                }

                playSound(type) {
                    // Optional: Add sound effects
                    try {
                        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                        const oscillator = audioContext.createOscillator();
                        const gainNode = audioContext.createGain();

                        oscillator.connect(gainNode);
                        gainNode.connect(audioContext.destination);

                        oscillator.frequency.setValueAtTime(type === 'next' ? 800 : 600, audioContext.currentTime);
                        oscillator.type = 'sine';

                        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                        gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.1);
                        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

                        oscillator.start(audioContext.currentTime);
                        oscillator.stop(audioContext.currentTime + 0.5);
                    } catch (e) {
                        // Audio not supported - ignore
                    }
                }

                celebrate() {
                    // Add celebration effect
                    for (let i = 0; i < 15; i++) {
                        setTimeout(() => {
                            const confetti = document.createElement('div');
                            confetti.className = 'confetti';
                            confetti.style.cssText = `
                                position: fixed;
                                width: 10px;
                                height: 10px;
                                background: ${['#d4af37', '#1e6b52', '#2a4d7a', '#6a4c93'][Math.floor(Math.random() * 4)]};
                                border-radius: 50%;
                                top: -20px;
                                left: ${Math.random() * 100}vw;
                                z-index: 99999;
                                animation: confetti-fall ${0.5 + Math.random()}s linear forwards;
                            `;
                            document.body.appendChild(confetti);

                            setTimeout(() => confetti.remove(), 2000);
                        }, i * 100);
                    }

                    // Add confetti animation to CSS if not exists
                    if (!document.getElementById('confetti-style')) {
                        const style = document.createElement('style');
                        style.id = 'confetti-style';
                        style.textContent = `
                            @keyframes confetti-fall {
                                0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                                100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
                            }
                        `;
                        document.head.appendChild(style);
                    }
                }

                sendNotification(title, message) {
                    // Use your existing notification system
                    if (typeof showNotification === 'function') {
                        showNotification(title, message);
                    }

                    // Send email if function exists
                    if (typeof sendEmail === 'function') {
                        sendEmail(
                            `Tour: ${title}`,
                            `Umulkher ${title.toLowerCase()}\n${message}\nTime: ${new Date().toLocaleString()}`,
                            'tour',
                            'Onboarding'
                        );
                    }
                }
            }

            // ============================================================================
            // INITIALIZATION & INTEGRATION
            // ============================================================================

            // Create global instance
            window.umulkherTour = null;

            // Initialize when page loads
            document.addEventListener('DOMContentLoaded', function() {
                // Wait for page to fully load
                setTimeout(() => {
                    window.umulkherTour = new OnboardingTour();
                }, 1000);
            });

            // Add this to your handleLogin function after successful login:
            // localStorage.setItem('isFirstLogin', 'true');

            // Add CSS for the tour (add this to your CSS file)
            const tourCSS = `
                /* Tour Overlay */
                .tour-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.85);
                    backdrop-filter: blur(8px);
                    z-index: 9998;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .tour-overlay.active {
                    opacity: 1;
                    visibility: visible;
                }

                .tour-overlay .tour-cutout {
                    position: absolute;
                    border: 3px solid #d4af37;
                    border-radius: 16px;
                    box-shadow: 0 0 0 9999px rgba(212, 175, 55, 0.15),
                                inset 0 0 25px rgba(212, 175, 55, 0.4),
                                0 0 50px rgba(212, 175, 55, 0.6);
                    animation: tour-pulse 2s infinite;
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                @keyframes tour-pulse {
                    0%, 100% { box-shadow: 0 0 0 9999px rgba(212, 175, 55, 0.15),
                                inset 0 0 25px rgba(212, 175, 55, 0.4),
                                0 0 50px rgba(212, 175, 55, 0.6); }
                    50% { box-shadow: 0 0 0 9999px rgba(212, 175, 55, 0.2),
                                inset 0 0 30px rgba(212, 175, 55, 0.5),
                                0 0 60px rgba(212, 175, 55, 0.8); }
                }

                /* Tour Tooltip */
                .tour-tooltip {
                    position: fixed;
                    background: linear-gradient(145deg, #151515 0%, #1a1a1a 100%);
                    border-radius: 20px;
                    padding: 25px;
                    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.9),
                                0 0 0 1px rgba(212, 175, 55, 0.3),
                                0 0 40px rgba(212, 175, 55, 0.3);
                    border: 1px solid rgba(212, 175, 55, 0.4);
                    z-index: 9999;
                    min-width: 350px;
                    max-width: 450px;
                    opacity: 0;
                    visibility: hidden;
                    transform: scale(0.95) translateY(20px);
                    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                }

                .tour-tooltip.active {
                    opacity: 1;
                    visibility: visible;
                    transform: scale(1) translateY(0);
                }

                .tour-tooltip::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 4px;
                    background: linear-gradient(135deg, #d4af37 0%, #c0c0c0 100%);
                    border-radius: 20px 20px 0 0;
                }

                /* Animations */
                .tour-tooltip.fadeIn { animation: fadeIn 0.5s ease; }
                .tour-tooltip.slideInRight { animation: slideInRight 0.5s ease; }
                .tour-tooltip.slideInLeft { animation: slideInLeft 0.5s ease; }
                .tour-tooltip.bounce { animation: bounce 0.8s ease; }
                .tour-tooltip.pulse { animation: pulse 1s ease infinite; }
                .tour-tooltip.celebrate { animation: celebrate 0.6s ease; }

                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slideInRight { from { transform: translateX(50px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
                @keyframes slideInLeft { from { transform: translateX(-50px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
                @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
                @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.03); } }
                @keyframes celebrate { 0% { transform: scale(0.5) rotate(-10deg); } 70% { transform: scale(1.05) rotate(5deg); } 100% { transform: scale(1) rotate(0); } }

                /* Tooltip Content */
                .tour-tooltip-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                    padding-bottom: 15px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }

                .tour-tooltip-title {
                    font-family: 'Montserrat', sans-serif;
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #fff;
                    margin: 0;
                    flex: 1;
                }

                .tour-tooltip-progress {
                    background: rgba(212, 175, 55, 0.2);
                    border-radius: 20px;
                    padding: 8px 16px;
                    font-weight: 700;
                    color: #d4af37;
                    font-family: 'Montserrat', sans-serif;
                    margin: 0 15px;
                    border: 1px solid rgba(212, 175, 55, 0.3);
                }

                .tour-close {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(212, 175, 55, 0.2);
                    border-radius: 12px;
                    color: #b0b0b0;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .tour-close:hover {
                    background: rgba(212, 175, 55, 0.1);
                    color: #d4af37;
                    border-color: #d4af37;
                }

                .tour-tooltip-body {
                    margin: 20px 0;
                }

                .tour-tooltip-message {
                    font-size: 1.1rem;
                    line-height: 1.6;
                    color: #f5f5f5;
                    margin-bottom: 20px;
                }

                .tour-tooltip-illustration {
                    text-align: center;
                    margin-top: 20px;
                }

                .tour-tooltip-illustration i {
                    font-size: 3rem;
                    color: #d4af37;
                    opacity: 0.7;
                }

                .tour-tooltip-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 20px;
                    padding-top: 20px;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                }

                .tour-tooltip-navigation {
                    display: flex;
                    gap: 12px;
                    margin-left: auto;
                }

                .tour-btn {
                    padding: 12px 24px;
                    border-radius: 12px;
                    border: 1px solid rgba(212, 175, 55, 0.2);
                    background: rgba(212, 175, 55, 0.1);
                    color: #f5f5f5;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-family: 'Inter', sans-serif;
                }

                .tour-btn:hover {
                    background: rgba(212, 175, 55, 0.2);
                    transform: translateY(-2px);
                    border-color: #d4af37;
                }

                .tour-btn.tour-finish {
                    background: linear-gradient(135deg, #d4af37 0%, #c0c0c0 100%);
                    color: #0a0a0a;
                    border: none;
                }

                .tour-btn.tour-finish:hover {
                    box-shadow: 0 10px 25px rgba(212, 175, 55, 0.4);
                }

                /* Tour Pointer */
                .tour-pointer {
                    position: fixed;
                    width: 0;
                    height: 0;
                    border-style: solid;
                    z-index: 10000;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                }

                .tour-pointer.active {
                    opacity: 1;
                    visibility: visible;
                }

                .tour-pointer.top {
                    border-width: 0 15px 15px 15px;
                    border-color: transparent transparent #d4af37 transparent;
                    filter: drop-shadow(0 3px 6px rgba(0,0,0,0.4));
                }

                .tour-pointer.bottom {
                    border-width: 15px 15px 0 15px;
                    border-color: #d4af37 transparent transparent transparent;
                    filter: drop-shadow(0 -3px 6px rgba(0,0,0,0.4));
                }

                .tour-pointer.left {
                    border-width: 15px 15px 15px 0;
                    border-color: transparent #d4af37 transparent transparent;
                    filter: drop-shadow(3px 0 6px rgba(0,0,0,0.4));
                }

                .tour-pointer.right {
                    border-width: 15px 0 15px 15px;
                    border-color: transparent transparent transparent #d4af37;
                    filter: drop-shadow(-3px 0 6px rgba(0,0,0,0.4));
                }

                /* Highlighted Element */
                .tour-highlighted {
                    position: relative !important;
                    z-index: 10002 !important;
                    animation: element-glow 2s infinite;
                }

                @keyframes element-glow {
                    0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.3); }
                    50% { box-shadow: 0 0 30px rgba(212, 175, 55, 0.5); }
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .tour-tooltip {
                        min-width: 280px;
                        max-width: 90%;
                        margin: 15px;
                        padding: 20px;
                    }

                    .tour-tooltip-title {
                        font-size: 1.3rem;
                    }

                    .tour-tooltip-progress {
                        padding: 6px 12px;
                        font-size: 0.9rem;
                    }

                    .tour-tooltip-message {
                        font-size: 1rem;
                    }

                    .tour-btn {
                        padding: 10px 18px;
                        font-size: 0.9rem;
                    }

                    .tour-tooltip-footer {
                        flex-direction: column;
                        gap: 12px;
                    }

                    .tour-tooltip-navigation {
                        width: 100%;
                        justify-content: center;
                    }
                }

                @media (max-width: 480px) {
                    .tour-tooltip {
                        padding: 15px;
                    }

                    .tour-tooltip-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 10px;
                    }

                    .tour-tooltip-progress {
                        align-self: flex-start;
                    }

                    .tour-close {
                        position: absolute;
                        top: 15px;
                        right: 15px;
                    }
                }
            `;

            // Add CSS to document
            if (!document.getElementById('tour-styles')) {
                const style = document.createElement('style');
                style.id = 'tour-styles';
                style.textContent = tourCSS;
                document.head.appendChild(style);
            }
            // Helper functions for tutorial
            function showTourTips() {
                const tips = [
                    "💡 Pro Tip: Click on highlighted elements during the tour to advance faster",
                    "🎯 Use 'Ctrl + Click' on Help & Support to restart tutorial anytime",
                    "⌨️ During tour: Use arrow keys ← → to navigate, Space to next, Esc to skip",
                    "📱 On mobile: Tap highlighted elements to move to next step",
                    "💾 Remember: Your data auto-saves, but backup weekly for safety"
                ];

                const randomTip = tips[Math.floor(Math.random() * tips.length)];
                showNotification('Quick Tip 💡', randomTip);
            }

            function showKeyboardShortcuts() {
                showNotification('Keyboard Shortcuts ⌨️',
                    '• Ctrl+P: Print schedule\n• Ctrl+E: Export PDF\n• Ctrl+S: Show stats\n• Ctrl+H: This help\n• During tour: ← → Arrows to navigate\n• Escape: Close/Skip');
            }

            // Make the restart function globally accessible
            window.restartTour = function() {
                if (window.umulkherTour) {
                    window.umulkherTour.restart();
                } else {
                    // Fallback if tour instance isn't available
                    localStorage.removeItem('umulkher-tour-v1');
                    localStorage.setItem('isFirstLogin', 'true');
                    showNotification('Tour Reset', 'Refresh the page to see the tutorial again!');
                }
            };

