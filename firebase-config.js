// ─────────────────────────────────────────────────────────────
// Firebase 설정 파일 (학생용 index.html, 교사용 teacher.html 공용)
// 프로젝트: hanja-sokdam-mission1
// apiKey는 공개되어도 되는 값입니다. 데이터 보호는 Realtime Database 보안 규칙이 담당합니다.
// ─────────────────────────────────────────────────────────────
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyD6XuS9Zox6IOi1A_JDwc6esdppgqUZzmU",
  authDomain: "hanja-sokdam-mission1.firebaseapp.com",
  databaseURL: "https://hanja-sokdam-mission1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hanja-sokdam-mission1",
  storageBucket: "hanja-sokdam-mission1.firebasestorage.app",
  messagingSenderId: "1083486335515",
  appId: "1:1083486335515:web:bbc5a488e7b7295b5dfebe"
};

// 교사 대시보드에 로그인할 Google 계정 (database.rules.json의 주소와 같아야 함)
window.TEACHER_EMAIL = "qwepoi007@gmail.com";
