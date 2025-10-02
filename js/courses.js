import { mockData } from './supabase.js';
import { formatDuration, formatNumber, createStars } from './main.js';

let currentFilter = 'All';
let searchQuery = '';

export function initCoursePage() {
  renderCourses();
  setupFilters();
  setupSearch();
}

function setupFilters() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('bg-primary-600', 'text-white'));
      filterButtons.forEach(btn => btn.classList.add('bg-white', 'text-text-primary'));

      button.classList.remove('bg-white', 'text-text-primary');
      button.classList.add('bg-primary-600', 'text-white');

      currentFilter = button.dataset.filter;
      renderCourses();
    });
  });
}

function setupSearch() {
  const searchInput = document.getElementById('courseSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase();
      renderCourses();
    });
  }
}

function filterCourses() {
  let filtered = mockData.courses;

  if (currentFilter !== 'All') {
    filtered = filtered.filter(course => course.category === currentFilter);
  }

  if (searchQuery) {
    filtered = filtered.filter(course =>
      course.title.toLowerCase().includes(searchQuery) ||
      course.description.toLowerCase().includes(searchQuery) ||
      course.instructor.toLowerCase().includes(searchQuery)
    );
  }

  return filtered;
}

function renderCourses() {
  const container = document.getElementById('coursesContainer');
  if (!container) return;

  const courses = filterCourses();

  if (courses.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12">
        <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-xl text-text-secondary">No courses found matching your criteria</p>
      </div>
    `;
    return;
  }

  container.innerHTML = courses.map(course => createCourseCard(course)).join('');

  const courseCards = container.querySelectorAll('.course-card');
  courseCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('opacity-100', 'translate-y-0');
    }, index * 100);
  });
}

function createCourseCard(course) {
  return `
    <div class="course-card opacity-0 translate-y-4 transition-all duration-500 bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden group">
      <div class="relative h-48 overflow-hidden">
        <img
          src="${course.thumbnail_url}?auto=compress&cs=tinysrgb&w=800"
          alt="${course.title}"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div class="absolute top-3 right-3">
          <span class="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
            ${course.level}
          </span>
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div class="p-6">
        <div class="flex items-center gap-2 mb-3">
          <span class="px-3 py-1 bg-secondary-100 text-secondary-700 text-xs font-medium rounded-full">
            ${course.category}
          </span>
        </div>

        <h3 class="text-xl font-bold text-text-primary mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
          ${course.title}
        </h3>

        <p class="text-text-secondary text-sm mb-4 line-clamp-2">
          ${course.description}
        </p>

        <div class="flex items-center gap-2 mb-4 text-sm text-text-secondary">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>${course.instructor}</span>
        </div>

        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-1">
            ${createStars(course.rating)}
            <span class="ml-2 text-sm font-semibold text-text-primary">${course.rating}</span>
          </div>
          <div class="text-sm text-text-secondary">
            ${formatNumber(course.enrolled_count)} students
          </div>
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-gray-100">
          <div class="flex items-center gap-2 text-sm text-text-secondary">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>${formatDuration(course.duration)}</span>
          </div>

          <button
            onclick="enrollCourse('${course.id}')"
            class="px-6 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  `;
}

window.enrollCourse = (courseId) => {
  const course = mockData.courses.find(c => c.id === courseId);
  if (course) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 z-50 px-6 py-4 bg-success-500 text-white rounded-lg shadow-xl transform transition-all duration-300';
    notification.innerHTML = `
      <div class="flex items-center gap-3">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <p class="font-semibold">Successfully enrolled!</p>
          <p class="text-sm opacity-90">${course.title}</p>
        </div>
      </div>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('opacity-0', 'translate-x-full');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
};
