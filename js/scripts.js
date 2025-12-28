<script>
         // Auto-play Music with Mute Toggle
        const bgMusic = document.getElementById('bgMusic');
        const muteMusicBtn = document.getElementById('muteMusicBtn');
        const muteIcon = document.getElementById('muteIcon');
        let isMuted = false;

        // Set initial volume
        bgMusic.volume = 0.4;

        // If autoplay is blocked, start music on first user interaction
        function startMusicOnce() {
            bgMusic.play().catch(() => {});
            window.removeEventListener("click", startMusicOnce);
            window.removeEventListener("touchstart", startMusicOnce);
        }
        window.addEventListener("click", startMusicOnce, { once: true });
        window.addEventListener("touchstart", startMusicOnce, { once: true });

        // Function to toggle mute/unmute
        function toggleMute() {
            if (isMuted) {
                bgMusic.muted = false;
                muteIcon.textContent = '🔊';
                muteMusicBtn.classList.remove('muted');
                isMuted = false;
            } else {
                bgMusic.muted = true;
                muteIcon.textContent = '🔇';
                muteMusicBtn.classList.add('muted');
                isMuted = true;
            }
        }

        // Auto-play music when page loads
        window.addEventListener('load', function() {
            bgMusic.play().catch(error => {
                console.log('Autoplay prevented by browser. User interaction required.');
            });
        });
        // Scroll to top button visibility
        const scrollBtn = document.getElementById('scrollTopBtn');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Modal controls
        function openPhoneModal() {
            document.getElementById('phoneModal').style.display = 'block';
        }
        function closePhoneModal() {
            document.getElementById('phoneModal').style.display = 'none';
        }
        function openEmailModal() {
            document.getElementById('emailModal').style.display = 'block';
        }
        function closeEmailModal() {
            document.getElementById('emailModal').style.display = 'none';
        }
        window.addEventListener('click', function(event) {
            const phoneModal = document.getElementById('phoneModal');
            const emailModal = document.getElementById('emailModal');
            if (event.target === phoneModal) phoneModal.style.display = 'none';
            if (event.target === emailModal) emailModal.style.display = 'none';
        });

        // Active nav links on scroll
        const navLinks = document.querySelectorAll('.hero-nav .nav-link');
        const topNavLinks = document.querySelectorAll('.top-nav-link');

        function setActiveLink() {
            let currentId = '';
            document.querySelectorAll('section.section[id]').forEach(sec => {
                const rect = sec.getBoundingClientRect();
                if (rect.top <= 120 && rect.bottom >= 120) currentId = sec.id;
            });
            if (!currentId) return;

            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
            });
            topNavLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
            });
        }

        window.addEventListener('scroll', setActiveLink);
        setActiveLink();

        // Mobile nav toggle
        const navToggle = document.getElementById('navToggle');
        const topNavCenter = document.querySelector('.top-nav-center');

        navToggle.addEventListener('click', () => {
            topNavCenter.classList.toggle('show');
        });

        // Dynamic footer year
        document.getElementById('footerYear').textContent = new Date().getFullYear();
    </script>