/* ===================================================================
    Author          : Modina Theme
    Version         : 1.0
* ================================================================= */

(function($) {
    "use strict";

    $(document).ready( function() {

        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanExpand: ['<i class="far fa-plus"></i>'],
        });

        // Mobile Sidebar Toggle
        const mobileSidebar = document.getElementById('mobileSidebar');
        const mobileSidebarOverlay = document.getElementById('mobileSidebarOverlay');
        const mobileSidebarClose = document.getElementById('mobileSidebarClose');
        const hamburger = document.querySelector('.header__hamburger');
        const sidebarToggle = document.querySelector('.sidebar__toggle');

        // Handle hamburger click (toggle)
        if (hamburger) {
            hamburger.addEventListener('click', function(e) {
                e.stopPropagation();
                const isActive = mobileSidebar.classList.contains('active');
                if (isActive) {
                    mobileSidebar.classList.remove('active');
                    mobileSidebarOverlay.classList.remove('active');
                    document.body.style.overflow = 'auto';
                } else {
                    mobileSidebar.classList.add('active');
                    mobileSidebarOverlay.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        }

        // Handle sidebar toggle click (toggle)
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                const isActive = mobileSidebar.classList.contains('active');
                if (isActive) {
                    mobileSidebar.classList.remove('active');
                    mobileSidebarOverlay.classList.remove('active');
                    document.body.style.overflow = 'auto';
                } else {
                    mobileSidebar.classList.add('active');
                    mobileSidebarOverlay.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        }

        if (mobileSidebarClose) {
            mobileSidebarClose.addEventListener('click', function() {
                mobileSidebar.classList.remove('active');
                mobileSidebarOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }

        if (mobileSidebarOverlay) {
            mobileSidebarOverlay.addEventListener('click', function() {
                mobileSidebar.classList.remove('active');
                mobileSidebarOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }

        // Close sidebar on link click
        const sidebarLinks = document.querySelectorAll('.mobile-sidebar-content a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Don't prevent default for hash links
                const href = this.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                }
                
                // Close sidebar
                mobileSidebar.classList.remove('active');
                mobileSidebarOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
                
                // Navigate after closing if needed
                if (href && !href.startsWith('#')) {
                    setTimeout(() => {
                        window.location.href = href;
                    }, 300);
                }
            });
        });

        // Mobile courses category toggle function - WORKING VERSION
        window.toggleMobileCoursesCategory = function(element) {
            const parentItem = element.closest('.mobile-submenu-item');
            if (!parentItem) return;
            
            const subList = parentItem.querySelector('.mobile-sub-list');
            const icon = element.querySelector('i');
            const isActive = parentItem.classList.contains('active');
            
            // Close other open items in same menu section
            const menuSection = element.closest('.mobile-menu-section');
            if (menuSection) {
                menuSection.querySelectorAll('.mobile-submenu-item').forEach(item => {
                    if (item !== parentItem && item.classList.contains('active')) {
                        item.classList.remove('active');
                        const otherSubList = item.querySelector('.mobile-sub-list');
                        if (otherSubList) {
                            otherSubList.style.display = 'none';
                        }
                    }
                });
            }
            
            // Toggle current item
            if (isActive) {
                parentItem.classList.remove('active');
                if (subList) {
                    subList.style.display = 'none';
                }
                if (icon) {
                    icon.style.transform = 'rotate(0deg)';
                }
            } else {
                parentItem.classList.add('active');
                if (subList) {
                    subList.style.display = 'block';
                }
                if (icon) {
                    icon.style.transform = 'rotate(90deg)';
                }
            }
        };

        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function() {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function() {
            $(".offcanvas__info").toggleClass("info-open");
            $(".offcanvas__overlay").toggleClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function() {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });

        //>> Sticky Header Js Start <<//

        $(window).scroll(function() {
            if ($(this).scrollTop() > 250) {
                $("#header-sticky").addClass("sticky");
            } else {
                $("#header-sticky").removeClass("sticky");
            }
        });


        //>> Wow Animation Start <<//
        new WOW().init();

         //>> Video Popup Start <<//
         $(".img-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: true,
            },
        });

        $('.video-popup').magnificPopup({
            type: 'iframe',
            callbacks: {}
        });


        //>> Wow Animation Start <<//
        // new WOW().init();

        //>> Nice Select Start <<//
        $('select').niceSelect();

        $('.odometer').appear(function(e) {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });

       
    

         //>> CountDown Start <<//
         let targetDate = new Date("2024-12-12 00:00:00").getTime();
         const countdownInterval = setInterval(function () {
             let currentDate = new Date().getTime();
             let remainingTime = targetDate - currentDate;
 
             if (remainingTime <= 0) {
                 clearInterval(countdownInterval);
                 // Display a message or perform any action when the countdown timer reaches zero
                 $("#countdown-container").text("Countdown has ended!");
             } else {
                 let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
                 let hours = Math.floor(
                     (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                 );
                 let minutes = Math.floor(
                     (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
                 );
                 let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
 
                 // Pad single-digit values with leading zeros
                 $("#day").text(days.toString().padStart(2, "0"));
                 $("#hour").text(hours.toString().padStart(2, "0"));
                 $("#min").text(minutes.toString().padStart(2, "0"));
                 $("#sec").text(seconds.toString().padStart(2, "0"));
             }
         }, 1000);

        //>> Team Hover Image Show Slider Start <<//
        const teamListItems = document.querySelectorAll(".team-list-items");

        function followImageCursor(event, teamListItems) {
            const contentBox = teamListItems.getBoundingClientRect();
            const dx = event.clientX - contentBox.x;
            const dy = event.clientY - contentBox.y;
            teamListItems.children[2].style.transform = `translate(${dx}px, ${dy}px) rotate(0)`;
        }
        
        teamListItems.forEach((item, i) => {
            item.addEventListener("mousemove", (event) => {
                setInterval(followImageCursor(event, item), 1000);
            });
        });


    
        

        //>> Custom Accordion Tabs <<//
		$(".accordion-single .header-area").on("click", function () {
			if ($(this).closest(".accordion-single").hasClass("active")) {
				$(this).closest(".accordion-single").removeClass("active");
				$(this).next(".content-area").slideUp();
			} else {
				$(".accordion-single").removeClass("active");
				$(this).closest(".accordion-single").addClass("active");
				$(".content-area").not($(this).next(".content-area")).slideUp();
				$(this).next(".content-area").slideToggle();
			}
		});

         //>> Back To Top Slider Start <<//

         $(window).on('scroll', function() {
            if ($(this).scrollTop() > 20) {
                $("#back-top").addClass("show");
            } else {
                $("#back-top").removeClass("show");
            }
        });
        
        $(document).on('click', '#back-top', function() {
            $('html, body').animate({ scrollTop: 0 }, 800);
            return false;
        });

        // circle-progress
        $(".circle-bar").loading();

    }); // End Document Ready Function

    $.fn.loading = function() {
        const DEFAULTS = {
            backgroundColor: '#b3cef6',
            progressColor: '#4b86db',
            percent: 75,
            duration: 2000
        };

        $(this).each(function() {
            const $target = $(this);

            const opts = {
                backgroundColor: $target.data('color') ? $target.data('color').split(',')[0] : DEFAULTS.backgroundColor,
                progressColor: $target.data('color') ? $target.data('color').split(',')[1] : DEFAULTS.progressColor,
                percent: $target.data('percent') ? $target.data('percent') : DEFAULTS.percent,
                duration: $target.data('duration') ? $target.data('duration') : DEFAULTS.duration
            };
            // console.log(opts);

            $target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + opts.percent + '%</span></div>');

            $target.find('.background').css('background-color', opts.backgroundColor);
            $target.find('.left').css('background-color', opts.backgroundColor);
            $target.find('.rotate').css('background-color', opts.progressColor);
            $target.find('.right').css('background-color', opts.progressColor);

            const $rotate = $target.find('.rotate');
            setTimeout(function() {
                $rotate.css({
                    'transition': 'transform ' + opts.duration + 'ms linear',
                    'transform': 'rotate(' + opts.percent * 3.6 + 'deg)'
                });
            }, 1);

            if (opts.percent > 50) {
                let animationRight = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-end';
                let animationLeft = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-start';
                $target.find('.right').css({
                    animation: animationRight,
                    opacity: 1
                });
                $target.find('.left').css({
                    animation: animationLeft,
                    opacity: 0
                });
            }
        });
    }

    //Price Range Slideer
    document.addEventListener("DOMContentLoaded", function () {
        const minSlider = document.getElementById("min-slider");
        const maxSlider = document.getElementById("max-slider");
        const amount = document.getElementById("amount");

        // Only run if elements exist
        if (!minSlider || !maxSlider || !amount) return;

        function updateAmount() {
            const minValue = parseInt(minSlider.value, 10);
            const maxValue = parseInt(maxSlider.value, 10);

            // Ensure the minimum value is always lower than the maximum value
            if (minValue > maxValue) {
                minSlider.value = maxValue;
            }

            // Update the displayed price range
            amount.value = "$" + minSlider.value + " - $" + maxSlider.value;

            // Calculate the percentage positions of the sliders
            const minPercent =
                ((minSlider.value - minSlider.min) /
                    (minSlider.max - minSlider.min)) *
                100;
            const maxPercent =
                ((maxSlider.value - maxSlider.min) /
                    (maxSlider.max - maxSlider.min)) *
                100;

            // Update the background gradient to show the active track color
            minSlider.style.background = `linear-gradient(to right, #000 ${minPercent}%, #005BFF ${minPercent}%, #005BFF ${maxPercent}%, #000 ${maxPercent}%)`;
            maxSlider.style.background = `linear-gradient(to right, #000 ${minPercent}%, #005BFF ${minPercent}%, #005BFF ${maxPercent}%, #000 ${maxPercent}%)`;
        }

        // Initialize the sliders and track with default values
        amount && updateAmount();

        // if (minSlider && maxSlider) {

        // Add event listeners for both sliders
        minSlider && minSlider.addEventListener("input", updateAmount);
        maxSlider && maxSlider.addEventListener("input", updateAmount);
        // }
    });

    function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');
            $(".preloader").delay(600).fadeOut();
        });
    }
    loader();

    
})(jQuery); // End jQuery


document.addEventListener('DOMContentLoaded', function () {

  const images = [
    { src: "assets/img/testimonial/testi.png" },
    { src: "assets/img/testimonial/testi2.png" },
    { src: "assets/img/testimonial/testi3.png" },
    { src: "assets/img/testimonial/testi4.png" },
    { src: "assets/img/testimonial/testi5.png" },
    { src: "assets/img/testimonial/testi6.png" }
  ];

  const extendedImages = [...images, ...images];

  const sliderEl = document.querySelector('.slider');
  const progressContainer = document.querySelector('.progress-indicators');

  let cardsToShow = 3;
  let position = 0;

  function createSliderCards() {
    sliderEl.innerHTML = '';
    extendedImages.forEach(img => {
      const card = document.createElement('div');
      card.className = 'slider-card';
      card.innerHTML = `
        <div class="slider-card-inner">
          <img src="${img.src}" alt="Student Review">
        </div>
      `;
      sliderEl.appendChild(card);
    });
  }

  function createProgressIndicators() {
    progressContainer.innerHTML = '';
    images.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = 'progress-indicator';
      if (i === 0) dot.classList.add('active');
      progressContainer.appendChild(dot);
    });
  }

  function updateSlider() {
    sliderEl.style.transform =
      `translateX(-${(position * 100) / cardsToShow}%)`;

    document.querySelectorAll('.progress-indicator').forEach((dot, i) => {
      dot.classList.toggle('active', i === position % images.length);
    });
  }

  function handleResize() {
    if (window.innerWidth <= 705) cardsToShow = 1;
    else if (window.innerWidth <= 1023) cardsToShow = 2;
    else cardsToShow = 3;

    updateSlider();
  }

  function startAutoScroll() {
    setInterval(() => {
      position++;
      if (position >= images.length) {
        position = 0;
        sliderEl.style.transition = 'none';
        updateSlider();
        setTimeout(() => {
          sliderEl.style.transition = 'transform 1s ease-in-out';
        }, 50);
      } else {
        updateSlider();
      }
    }, 3000);
  }

  window.addEventListener('resize', handleResize);

  createSliderCards();
  createProgressIndicators();
  handleResize();
  startAutoScroll();

  // Certificate Zoom Modal Functionality
    const modal = document.getElementById('certificateModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.certificate-close');
    const certificateItems = document.querySelectorAll('.certificate-item');

    certificateItems.forEach(item => {
    item.addEventListener('click', function () {
        const imageSrc = this.getAttribute('data-src');
        modalImage.src = imageSrc;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    });

    closeBtn.addEventListener('click', function () {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    });

    modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    });


    });

 // Arrays of logo URLs
        const logosSlider1 = [
            "assets/img/logo/logo1.png",
            "assets/img/logo/logo2.png",
            "assets/img/logo/logo3.png",
            "assets/img/logo/logo4.png",
            "assets/img/logo/logo5.png",
            "assets/img/logo/logo6.png",
            "assets/img/logo/logo7.png",
            "assets/img/logo/logo8.png",
            "assets/img/logo/logo9.png",
            "assets/img/logo/logo10.png",
            "assets/img/logo/logo11.png",
            "assets/img/logo/logo12.png",
            "assets/img/logo/logo13.png",
            "assets/img/logo/logo14.png",
            "assets/img/logo/logo15.png"
        ];

        const logosSlider2 = [
            "assets/img/logo/logo16.png",
            "assets/img/logo/logo17.png",
            "assets/img/logo/logo18.png",
            "assets/img/logo/logo19.png",
            "assets/img/logo/logo20.png",
            "assets/img/logo/logo21.png",
            "assets/img/logo/logo22.png",
            "assets/img/logo/logo23.png",
            "assets/img/logo/logo24.png",
            "assets/img/logo/logo25.png",
            "assets/img/logo/logo26.png",
            "assets/img/logo/logo1.png",
            "assets/img/logo/logo2.png",
            "assets/img/logo/logo3.png"
        ];

        // Function to populate marquees with images
        function populateMarquee(marqueeId, images) {
            const marquee = document.getElementById(marqueeId);
            
            // Add original set of images
            images.forEach((src, index) => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = "Company Logo";
                img.className = "company-logo";
                marquee.appendChild(img);
            });
            
            // Duplicate the images for continuous scrolling
            images.forEach((src, index) => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = "Company Logo";
                img.className = "company-logo";
                marquee.appendChild(img);
            });
        }

        // Initialize marquees
        document.addEventListener('DOMContentLoaded', function() {
            populateMarquee('marquee1', logosSlider1);
            populateMarquee('marquee2', logosSlider2);
        });
        document.querySelectorAll('.company-logo').forEach((logo, i) => {
        logo.style.animationDelay = `${i * 0.05}s`;
    });



        
    
        function openProgram(evt, programName) {
        let contents = document.querySelectorAll(".program-tab-content");
        let buttons = document.querySelectorAll(".tab-btn");

        contents.forEach(c => c.classList.remove("active"));
        buttons.forEach(b => b.classList.remove("active"));

        document.getElementById(programName).classList.add("active");
        evt.currentTarget.classList.add("active");
        }

        
    //

        const courseBtn = document.getElementById("courseBtn");
        const megaMenu = document.getElementById("megaMenu");

        courseBtn.onclick = () => {
            megaMenu.classList.toggle("show");
        };

        document.querySelectorAll(".mega-tab").forEach(tab => {
            tab.onclick = function () {
                document.querySelectorAll(".mega-tab").forEach(t => t.classList.remove("active"));
                document.querySelectorAll(".mega-panel").forEach(p => p.classList.remove("active"));

                this.classList.add("active");
                document.getElementById(this.dataset.target).classList.add("active");
            };
        });

        document.addEventListener("click", function (e) {
            if (!megaMenu.contains(e.target) && !courseBtn.contains(e.target)) {
                megaMenu.classList.remove("show");
            }
        });

        function openTab(tabId) {
            document.querySelectorAll('.mega-panel').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.mega-tab').forEach(t => t.classList.remove('active'));

            document.getElementById(tabId).classList.add('active');
            event.target.classList.add('active');

            const menu = document.getElementById('megaMenu');
            if (tabId === 'plusTwoDiploma') {
                menu.classList.add('wide');
            } else {
                menu.classList.remove('wide');
            }
        }


        // Unified toggle for Courses Mega Menu
        // Works like mobile category toggle: opens/closes, closes siblings, and manages inline styles.



        // Filter Courses by Category
        function filterCourseCategory(event, category) {
            const tabs = document.querySelectorAll('.mega-menu-tab');
            const courses = document.querySelectorAll('.course-category');

            // Update active tab
            tabs.forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');

            // Show/hide courses based on category
            courses.forEach(course => {
                course.classList.remove('active', 'show-all');
                if (category === 'all') {
                    course.classList.add('show-all');
                } else if (course.dataset.category === category) {
                    course.classList.add('active');
                }
            });
        }

        // (Removed) old outside-click handler — replaced by a single robust listener below

        function toggleCoursesMegaMenu(event) {
            if (event) event.stopPropagation();

            const wrapper = document.querySelector('.courses-menu-wrapper');
            const menu = document.getElementById('coursesMegaMenu');
            const toggleBtn = document.getElementById('coursesToggleBtn');
            if (!menu || !wrapper) return;

            const isActive = menu.classList.contains('active');

            // Close any other open menus inside the same wrapper
            wrapper.querySelectorAll('.courses-mega-menu').forEach(m => {
                if (m !== menu && m.classList.contains('active')) {
                    m.classList.remove('active');
                    m.style.cssText = '';
                }
            });

            // Toggle current menu
            if (isActive) {
                menu.classList.remove('active');
                menu.style.cssText = '';
                if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
            } else {
                menu.classList.add('active');
                const widthPx = Math.min(1400, Math.floor(window.innerWidth * 0.95));
                menu.style.cssText =
                    "width:" + widthPx + "px !important;" +
                    "left:35% !important;" +
                    "transform:translateX(-50%) !important;" +
                    "display:flex !important;" +
                    "max-height:900px !important;" +
                    "overflow-y:auto !important;";
                try { setCourseCategory('matric'); } catch (e) {}
                if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
            }
        }
        
        const coursesMegaMenu = document.getElementById('coursesMegaMenu');
            if (coursesMegaMenu) {
                coursesMegaMenu.addEventListener('click', function (e) {
                    e.stopPropagation();
                });
            }


        // Close with Escape key when open
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                const coursesMegaMenu = document.getElementById('coursesMegaMenu');
                if (coursesMegaMenu && coursesMegaMenu.classList.contains('active')) {
                    coursesMegaMenu.classList.remove('active');
                    coursesMegaMenu.style.cssText = '';
                }
            }
        });
        // Set default visible category function
        function setCourseCategory(category) {
            const tabs = document.querySelectorAll('.mega-menu-tab');
            const courses = document.querySelectorAll('.course-category');

            tabs.forEach(tab => tab.classList.remove('active'));
            const tab = document.querySelector('.mega-menu-tab[data-cat="' + category + '"]');
            if (tab) tab.classList.add('active');

            courses.forEach(course => {
                course.classList.remove('active', 'show-all');
                if (course.dataset.category === category) {
                    course.classList.add('active');
                }
            });
        }

        // Initialize default active category on page load
        document.addEventListener('DOMContentLoaded', function() {
            setCourseCategory('matric');
        });

        // Update mega menu inline width when resizing if it's open
        window.addEventListener('resize', function() {
            const coursesMegaMenu = document.getElementById('coursesMegaMenu');
            if (!coursesMegaMenu) return;
            if (coursesMegaMenu.classList.contains('active')) {
                const widthPx = Math.min(1400, Math.floor(window.innerWidth * 0.95));
                coursesMegaMenu.style.cssText = "width: " + widthPx + "px !important; left: 35% !important; transform: translateX(-50%) !important; display: flex !important; max-height: 900px !important; overflow-y: auto !important;";
            }
        });

        
       (() => {
  const collage = document.querySelector('.collage');
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = document.querySelector('.lightbox-close');

  if (!collage || !lightbox || !lightboxImg) return;

  /* ---------- OPEN LIGHTBOX (Event Delegation) ---------- */
//   collage.addEventListener('click', (e) => {
//     const img = e.target.closest('.collage-item img');
//     if (!img) return;

//     lightboxImg.src = img.src;
//     lightbox.classList.add('active');
//     document.body.style.overflow = 'hidden';
//   });

  /* ---------- CLOSE LIGHTBOX ---------- */
//   const closeLightbox = () => {
//     lightbox.classList.remove('active');
//     lightboxImg.src = '';
//     document.body.style.overflow = '';
//   };

//   closeBtn.addEventListener('click', closeLightbox);

//   lightbox.addEventListener('click', (e) => {
//     if (e.target === lightbox) closeLightbox();
//   });

  /* ---------- ESC KEY CLOSE ---------- */
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  /* ---------- IMAGE ERROR SAFETY ---------- */
  document.querySelectorAll('.collage-item img').forEach(img => {
    img.onerror = () => {
      img.style.display = 'none';
    };
  });

})();

// ===== Close Courses Mega Menu on Outside Click =====
document.addEventListener('click', function (e) {
    const menu = document.getElementById('coursesMegaMenu');
    const toggleBtn = document.getElementById('coursesToggleBtn');
    if (!menu) return;

    // Only act when menu is open
    if (!menu.classList.contains('active')) return;

    // If click was inside the menu or on the toggle button, do nothing
    if (menu.contains(e.target) || (toggleBtn && toggleBtn.contains(e.target))) return;

    // Otherwise close the menu and clear inline styles / aria
    menu.classList.remove('active');
    menu.style.cssText = '';
    if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'false');
});
