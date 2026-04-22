/* ============================================================
   PAMOJA NIGERIA — 2025 Opinion Poll
   Interactions and Charts
   ============================================================ */

(function () {
  'use strict';

  // ============ NAV TOGGLE (mobile menu) ============
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  // ============ SCROLL REVEAL ============
  const revealSelectors = [
    '.tldr-card',
    '.fact',
    '.rec-card',
    '.chart-block',
    '.pm-profile',
    '.bigstat',
    '.callout',
    '.why-it-matters',
    '.method-item',
    '.state-table',
    '.concept-box',
    '.spectrum-figure',
    '.define-box',
    '.banner-info'
  ];

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(revealSelectors.join(',')).forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  // ============ CHART.JS — wait for it to load ============
  function whenChartReady(callback) {
    if (typeof Chart !== 'undefined') {
      callback();
      return;
    }
    let tries = 0;
    const interval = setInterval(function () {
      tries += 1;
      if (typeof Chart !== 'undefined') {
        clearInterval(interval);
        callback();
      } else if (tries > 100) {
        clearInterval(interval);
        console.warn('Chart.js failed to load.');
      }
    }, 50);
  }

  whenChartReady(function () {

    // Brand tokens
    const PURPLE = '#49267a';
    const PURPLE_SOFT = '#aa90c2';
    const PINK = '#e62b67';
    const YELLOW = '#f8c501';
    const INK = '#1a1320';
    const GRID = '#e3d9ec';

    Chart.defaults.font.family = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";
    Chart.defaults.font.size = 13;
    Chart.defaults.color = INK;

    // ============ KNOWLEDGE GAPS CHART ============
    const knCanvas = document.getElementById('chartKnowledge');
    if (knCanvas) {
      new Chart(knCanvas, {
        type: 'bar',
        data: {
          labels: [
            "Save woman's life *(actually legal)*",
            'Fetal anomaly',
            'Incest',
            'Rape',
            'Mental health',
            'Physical health'
          ],
          datasets: [{
            label: '% who got the law wrong',
            data: [37, 58, 54, 49, 43, 41],
            backgroundColor: [PINK, PURPLE, PURPLE, PURPLE, PURPLE, PURPLE],
            borderRadius: 8,
            borderSkipped: false
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: PURPLE,
              padding: 12,
              callbacks: {
                label: function (ctx) {
                  return ctx.parsed.x + '% incorrectly identified the law';
                }
              }
            }
          },
          scales: {
            x: {
              beginAtZero: true,
              max: 70,
              grid: { color: GRID, drawBorder: false },
              ticks: { callback: function (v) { return v + '%'; } }
            },
            y: { grid: { display: false } }
          }
        }
      });
    }

    // ============ ATTITUDES CHART (stacked) ============
    const atCanvas = document.getElementById('chartAttitudes');
    if (atCanvas) {
      new Chart(atCanvas, {
        type: 'bar',
        data: {
          labels: [
            "To save woman's life",
            'Fetal anomaly',
            'Incest',
            'Rape'
          ],
          datasets: [
            {
              label: 'In favor',
              data: [78, 63, 59, 54],
              backgroundColor: PINK,
              borderRadius: { topLeft: 8, bottomLeft: 8 },
              stack: 's1'
            },
            {
              label: "Don't know",
              data: [4, 5, 4, 4],
              backgroundColor: YELLOW,
              borderRadius: { topRight: 8, bottomRight: 8 },
              stack: 's1'
            }
          ]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: { padding: 16, usePointStyle: true, pointStyle: 'rectRounded' }
            },
            tooltip: { backgroundColor: PURPLE, padding: 12 }
          },
          scales: {
            x: {
              stacked: true,
              beginAtZero: true,
              max: 100,
              grid: { color: GRID, drawBorder: false },
              ticks: { callback: function (v) { return v + '%'; } }
            },
            y: { stacked: true, grid: { display: false } }
          }
        }
      });
    }

    // ============ PLATFORMS CHART ============
    const plCanvas = document.getElementById('chartPlatforms');
    if (plCanvas) {
      new Chart(plCanvas, {
        type: 'bar',
        data: {
          labels: [
            'Facebook',
            'TikTok',
            'YouTube',
            'DSTV Now',
            'Netflix',
            'SHOWMAX',
            'IrokoTV',
            'Free-to-air TV',
            'Afrinolly'
          ],
          datasets: [{
            data: [58, 55, 52, 37, 24, 7, 7, 6, 2],
            backgroundColor: [PINK, PINK, PINK, PURPLE, PURPLE, PURPLE, PURPLE, PURPLE, PURPLE],
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: PURPLE,
              padding: 12,
              callbacks: {
                label: function (ctx) { return ctx.parsed.y + '%'; }
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 70,
              grid: { color: GRID },
              ticks: { callback: function (v) { return v + '%'; } }
            },
            x: {
              grid: { display: false },
              ticks: { autoSkip: false, maxRotation: 45, minRotation: 45, font: { size: 11 } }
            }
          }
        }
      });
    }

    // ============ FORMATS CHART ============
    const fmCanvas = document.getElementById('chartFormats');
    if (fmCanvas) {
      new Chart(fmCanvas, {
        type: 'bar',
        data: {
          labels: [
            'Short-form video',
            'Hour-long drama',
            'Web series (10–30 min)',
            'Sitcoms / comedies',
            'Long-form podcasts',
            'Reality game shows',
            'Reality lifestyle',
            'Reality dating'
          ],
          datasets: [{
            data: [57, 43, 36, 32, 22, 16, 14, 7],
            backgroundColor: [PINK, PURPLE, PURPLE, PURPLE, PURPLE, PURPLE_SOFT, PURPLE_SOFT, PURPLE_SOFT],
            borderRadius: 6
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: PURPLE,
              padding: 12,
              callbacks: {
                label: function (ctx) { return ctx.parsed.x + '%'; }
              }
            }
          },
          scales: {
            x: {
              beginAtZero: true,
              max: 65,
              grid: { color: GRID },
              ticks: { callback: function (v) { return v + '%'; } }
            },
            y: {
              grid: { display: false },
              ticks: { font: { size: 11 } }
            }
          }
        }
      });
    }

  });

})();
