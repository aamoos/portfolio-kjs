<template>
  <v-app>
    <v-app-bar elevation="0" color="transparent" class="px-4 app-header">
      <v-app-bar-title class="font-weight-bold">{{ name }} 포트폴리오</v-app-bar-title>
      <v-spacer />
      <v-btn variant="text" @click="scrollTo('hero')">홈</v-btn>
      <v-btn variant="text" @click="scrollTo('about')">소개</v-btn>
      <v-btn variant="text" @click="scrollTo('skills')">기술</v-btn>
      <v-btn variant="text" @click="scrollTo('experience')">경험</v-btn>
      <v-btn variant="text" @click="scrollTo('career')">경력</v-btn>
      <v-btn variant="text" @click="scrollTo('projects')">프로젝트</v-btn>
      <v-btn variant="text" @click="scrollTo('contact')">연락처</v-btn>
      <v-btn class="ml-2" icon="mdi-theme-light-dark" @click="toggleTheme" :title="isDark ? '라이트 모드' : '다크 모드'" />
    </v-app-bar>

    <v-main class="app-main">
      <!-- Hero -->
      <section :id="ids.hero" class="hero-section py-16 py-md-24">
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="7">
              <div class="text-h3 text-md-h2 font-weight-bold mb-4">
                안녕하세요, <span class="text-primary">{{ name }}</span>입니다.
              </div>
              <div class="text-body-1 text-medium-emphasis mb-6">
                Spring Boot와 Vue 3/TypeScript 기반의 풀스택 개발자이며, GIS(OpenLayers, Leaflet, GeoServer) 기반 서비스 구축 경험을 통해 데이터 시각화와 사용자 경험 향상에 집중하고 있습니다.
              </div>
              <v-btn color="primary" class="mr-3" size="large" @click="scrollTo('projects')" prepend-icon="mdi-briefcase">
                프로젝트 보기
              </v-btn>
            </v-col>
            <v-col cols="12" md="5" class="text-center">
              <v-avatar size="180">
                <v-img src="/assets/img/me.JPG" alt="Profile" cover />
              </v-avatar>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- About -->
      <section :id="ids.about" class="py-16">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <div class="text-h5 font-weight-bold mb-2">소개</div>
              <div class="text-medium-emphasis">About Me</div>
            </v-col>
            <v-col cols="12" md="8">
              <v-card variant="tonal">
                <v-card-text class="preline">{{ aboutText }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Skills -->
      <section :id="ids.skills" class="py-16">
        <v-container>
          <div class="text-h5 font-weight-bold mb-6">기술</div>
          <v-row>
            <v-col cols="12" md="6">
              <v-card class="mb-4" title="Frontend" variant="outlined">
                <v-card-text>
                  <div class="mb-3">
                    <v-chip class="mr-2 mb-2" color="primary" variant="flat">Vue</v-chip>
                    <v-chip class="mr-2 mb-2" color="primary" variant="flat">TypeScript/JavaScript</v-chip>
                    <v-chip class="mr-2 mb-2" color="primary" variant="flat">Jsp/Jquery</v-chip>
                    <v-chip class="mr-2 mb-2" color="primary" variant="flat">Thymeleaf</v-chip>
                    <v-chip class="mr-2 mb-2" color="primary" variant="flat">Vite</v-chip>
                  </div>
                  <v-progress-linear color="primary" height="10" :model-value="90" rounded>
                    <template #default>{{ 90 }}%</template>
                  </v-progress-linear>
                </v-card-text>
              </v-card>
              <v-card class="mb-4" title="Backend" variant="outlined">
                <v-card-text>
                  <div class="mb-3">
                    <v-chip class="mr-2 mb-2" color="primary" variant="flat">Spring Boot</v-chip>
                    <v-chip class="mr-2 mb-2" color="primary" variant="flat">Java</v-chip>
                    <v-chip class="mr-2 mb-2" color="primary" variant="flat">Jpa/Mybatis/Querydsl</v-chip>
                    <v-chip class="mr-2 mb-2" color="primary" variant="flat">Kotlin</v-chip>
                  </div>
                  <v-progress-linear color="primary" height="10" :model-value="90" rounded>
                    <template #default>{{ 90 }}%</template>
                  </v-progress-linear>
                </v-card-text>
              </v-card>
              <v-card class="mb-4" title="Version Control" variant="outlined">
                <v-card-text>
                  <div class="mb-3">
                    <v-chip class="mr-2 mb-2" variant="tonal">Git</v-chip>
                    <v-chip class="mr-2 mb-2" variant="tonal">SVN</v-chip>
                    <v-chip class="mr-2 mb-2" variant="tonal">Bitbucket</v-chip>
                  </div>
                  <v-progress-linear color="secondary" height="10" :model-value="80" rounded>
                    <template #default>{{ 80 }}%</template>
                  </v-progress-linear>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card class="mb-4" title="Mapping / GIS" variant="outlined">
                <v-card-text>
                  <div class="mb-3">
                    <v-chip class="mr-2 mb-2" variant="tonal">OpenLayers</v-chip>
                    <v-chip class="mr-2 mb-2" variant="tonal">Leaflet</v-chip>
                    <v-chip class="mr-2 mb-2" variant="tonal">GeoServer</v-chip>
                    <v-chip class="mr-2 mb-2" variant="tonal">vWorld</v-chip>
                    <v-chip class="mr-2 mb-2" variant="tonal">OpenStreetMap</v-chip>
                    <v-chip class="mr-2 mb-2" variant="tonal">KakaoMap</v-chip>
                    <v-chip class="mr-2 mb-2" variant="tonal">NaverMap</v-chip>
                  </div>
                  <v-progress-linear color="secondary" height="10" :model-value="85" rounded>
                    <template #default>{{ 85 }}%</template>
                  </v-progress-linear>
                </v-card-text>
              </v-card>
              <v-card class="mb-4" title="UI Framework" variant="outlined">
                <v-card-text>
                  <div class="mb-3">
                    <v-chip class="mr-2 mb-2" variant="tonal">Bootstrap</v-chip>
                    <v-chip class="mr-2 mb-2" variant="tonal">Tailwind CSS</v-chip>
                    <v-chip class="mr-2 mb-2" variant="tonal">Ant Design</v-chip>
                    <v-chip class="mr-2 mb-2" variant="tonal">Vuetify</v-chip>
                  </div>
                  <v-progress-linear color="accent" height="10" :model-value="80" rounded>
                    <template #default>{{ 80 }}%</template>
                  </v-progress-linear>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-card class="mb-4" title="Certificates" variant="outlined">
                <v-card-text>
                  <div class="d-flex flex-column gap-2">
                    <div class="d-flex align-center justify-space-between">
                      <div>정보처리기사</div>
                      <div class="text-primary">2021.06</div>
                    </div>
                    <div class="d-flex align-center justify-space-between">
                      <div>SQLD</div>
                      <div class="text-primary">2022.06</div>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Experience -->
      <section :id="ids.experience" class="py-16">
        <v-container>
          <div class="text-h5 font-weight-bold mb-6">경험</div>
          <v-row>
            <v-col v-for="(card, i) in experienceCards" :key="i" cols="12" sm="6" md="4">
              <v-card variant="outlined" class="h-100">
                <v-card-title class="text-wrap">{{ card.title }}</v-card-title>
                <v-card-text class="text-medium-emphasis">
                  <ul style="padding-left: 1rem;">
                    <li v-for="(line, j) in card.lines" :key="j">{{ line }}</li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Career -->
      <section :id="ids.career" class="py-16">
        <v-container>
          <div class="text-h5 font-weight-bold mb-6">경력</div>
          <v-row>
            <v-col cols="12" md="10" class="mx-auto">
              <v-timeline density="compact" side="end">
                <v-timeline-item
                  v-for="(item, idx) in careers"
                  :key="idx"
                  :dot-color="'primary'"
                  size="small"
                >
                  <div class="text-medium-emphasis">{{ item.period }}</div>
                  <div class="text-subtitle-1 font-weight-bold">{{ item.title }}</div>
                  <div class="text-caption text-medium-emphasis mb-2">{{ item.company }}</div>
                  <div>
                    <div class="text-body-2 font-weight-medium mt-1 mb-1">프로젝트 개요</div>
                    <div>- {{ item.description }}</div><br/>
                    <div class="text-body-2 font-weight-medium mt-1 mb-1">주요 역할 및 수행 작업</div>
                    <ul style="padding-left: 1rem;">
                      <li v-for="(b, k) in item.bullets" :key="k">{{ b }}</li>
                    </ul>
                    <div class="mt-2 text-caption">Tech Stack: {{ item.stack }}</div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Projects -->
      <section :id="ids.projects" class="py-16">
        <v-container>
          <div class="d-flex align-center justify-space-between mb-4">
            <div class="text-h5 font-weight-bold">프로젝트</div>
            <v-btn variant="text" prepend-icon="mdi-github" href="https://github.com/aamoos" target="_blank">GitHub</v-btn>
          </div>
          <v-row>
            <v-col v-for="p in projects" :key="p.title" cols="12" sm="6" md="4">
              <v-card :title="p.title" :subtitle="p.stack" hover>
                <v-img :src="p.image" height="160" cover />
                <v-card-text class="text-medium-emphasis">{{ p.desc }}</v-card-text>
                <v-card-actions>
                  <v-btn v-if="p.demo" variant="flat" color="primary" :href="p.demo" target="_blank" prepend-icon="mdi-open-in-new">데모</v-btn>
                  <v-btn v-if="p.repo" variant="text" :href="p.repo" target="_blank" prepend-icon="mdi-github">코드</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Contact -->
      <section :id="ids.contact" class="py-16">
        <v-container>
          <div class="text-h5 font-weight-bold mb-6">연락처</div>
          <v-row>
            <v-col cols="12" md="6">
              <v-card>
                <v-card-text>
                  협업 제안이나 문의가 있다면 언제든 연락 주세요.
                </v-card-text>
                <v-list density="comfortable">
                  <v-list-item prepend-icon="mdi-email-outline" title="aamoos@naver.com" />
                  <v-list-item prepend-icon="mdi-web" title="https://aamoos.tistory.com" />
                  <v-list-item prepend-icon="mdi-github" title="github.com/aamoos" />
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-main>

    <v-footer class="text-medium-emphasis">
      <v-container>
        <div class="d-flex align-center justify-space-between">
          <div>© {{ new Date().getFullYear() }} {{ name }}</div>
          <div class="d-flex align-center">
            <v-btn icon="mdi-github" variant="text" href="https://github.com/aamoos" target="_blank" />
            <v-btn icon="mdi-web" variant="text" href="https://aamoos.tistory.com" target="_blank" />
          </div>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useTheme } from 'vuetify'

// About section text with explicit newlines for pre-line rendering
const aboutText = `안녕하세요 👋
공공기관 및 기업 시스템의 SI/SM 프로젝트에서 Spring Boot와 JSP 기반의 웹 서비스를 개발해온 백엔드 개발자입니다.
PostgreSQL, Oracle 등 RDBMS와 GeoServer, OpenLayers, Kakao/Naver/VWorld 지도 API를 활용한 GIS 시스템 구축 경험이 풍부합니다.
현재는 TypeScript, Kotlin, React, Vue 등 최신 기술 스택을 학습하며 개인 프로젝트를 통해 모던 웹 개발자로 성장하고 있습니다.`

const name = '김재성'

const ids = {
  hero: 'hero',
  about: 'about',
  skills: 'skills',
  experience: 'experience',
  career: 'career',
  projects: 'projects',
  contact: 'contact',
} as const

const experienceCards = [
  {
    title: '지도기반 애플리케이션 개발',
    lines: [
      '코리아세븐 GIS 시스템',
      '서울시 상권분석 서비스',
      '중앙일보 GCRM 서비스',
      'LGU+ 우리 가게 패키지',
      '투썸플레이스 MAST',
      'Hy 한국야쿠르트 API 서비스',
      '사내 솔루션 TREND-ON, 부동산 서비스',
      'JTI 서비스',
      'GS리테일 주소정제 서비스 Api',
      'BGF리테일 GIS-MAP-SYSTEM'
    ]
  },
  {
    title: '공공기관 사이트 개발',
    lines: [
      '고양시청 데이터세상 서비스',
      '창원시청 사이트',
      '광진구청 사이트'
    ]
  },
  {
    title: '하이브리드앱 개발',
    lines: [
      '한국 GM 전자계약서 S-WORK (전자계약서)',
      '한국 GM E-COMMERCE API, 알림톡',
      '3DEYES (3D 영상플레이어 앱)'
    ]
  },
  {
    title: '예약 서비스 개발',
    lines: [
      'YMCA 고양국제청소년문화센터 사이트',
      '오픈메이트 사내 회의실 예약 시스템'
    ]
  },
  {
    title: '관리자 사이트 개발',
    lines: [
      '한국TDB 신용정보 기업DB 작성 시스템',
      '주식회사 포디웰랩 4D Workman 관리자 시스템',
      'RSM 르노삼성 전자계약서 관리자 시스템',
      'GS 리테일 점포관리 시스템'
    ]
  },
  {
    title: '그룹웨어 개발',
    lines: [
      '사내 커뮤니케이션 및 일정 관리 중심의 그룹웨어 시스템 구축 (AND U)'
    ]
  },
  {
    title: 'AI 프로젝트 개발',
    lines: [
      '한국과학기술원 Kisti Apolo LLM'
    ]
  }
] as const

// ====== 경력: 기존 항목 모두 제거하고 단일 항목으로 교체 ======
const careers = [
  {
    company: '오픈메이트',
    period: '2025.09 ~ 진행중',
    title: '지역 모니터링 서비스',
    description: 'AI 분석 모델이 상권을 분석한 결과를 지도에 시각화하여 보여주는 사이트',
    bullets: [
      '서버 구성 (각 서버 스펙은 어떻게 구성해야 하는지)',
      'DB PostgreSQL, PostGIS Docker Compose 설치'
    ],
    stack: 'Spring Boot · Thymeleaf · PostgreSQL · Docker Compose'
  },
  {
    company: '오픈메이트',
    period: '2025.08 ~ 2025.09',
    title: '한국과학기술원 KISTI Apolo LLM',
    description: '공공 R&D 사업화 유망성을 탐색하는 AI 플랫폼',
    bullets: [
      '서비스 URL: https://apollo.kisti.re.kr/fo',
      '기업 유망성 분석 AI “분석하기” 중복 호출(2회) 에러 수정',
      'pdf.js CDN 워커 로딩 실패로 인한 PDF 뷰어 미표출 이슈 해결'
    ],
    stack: 'Spring Boot · Spring Data JPA · QueryDSL · React · TypeScript · Vite · MySQL'
  },
  {
    company: '오픈메이트',
    period: '2025.07 ~ 2025.08',
    title: '결제선생 매출비교 서비스 (앱스토어/플레이스토어)',
    description: '소상공인 대상 상권 분석 및 매출 예측 앱. KakaoMap 기반 매물 시각화 + 통신사 데이터 활용 시뮬레이션 제공',
    bullets: [
      '권역 선택 시 통신사 상권 데이터 표출 기능 개발',
      '지도 권역 클릭 시 매물/상권 데이터 실시간 동적 시각화',
      '부동산 매물 신규 REST API 설계/구현 및 데이터 정합성 고려',
      '찜한 매물 리스트 매출 예상치 오류 수정 및 필터링 로직 개선',
      '허위/중복 매물 데이터 정제(이력/중복 조건 분석)로 정확도 향상',
      '잔여 기능 QA 및 안정화, 베타 전후 후속 이슈 정리',
      '설문조사 페이지 개발',
      '성과: 사용자 문의 30% 감소, 매출 예측 오차율 ~25% → 10% 이하 개선'
    ],
    stack: "Spring Boot · MyBatis · Java 21 · Thymeleaf · JavaScript · Maven · Docker · Let's Encrypt · KakaoMap API"
  },
  {
    company: '오픈메이트',
    period: '2025.04 ~ 2025.05',
    title: 'GS 리테일 GIS Backend System API',
    description: '주소 정제 솔루션 외부 JAR → 소켓/임베디드 리팩토링 및 대용량 주소 처리 API 개발',
    bullets: [
      '주소 입력 → 프로시저/함수 호출 기반 정제 API 개발',
      '도로명/지번 혼합, 축약어/오탈자 등 전처리 로직 정교화',
      '50만 건 이상 대용량 처리 환경 구성',
      '주소정제 데몬과의 소켓 통신 모듈 구현',
      '성과: 처리 속도 4배↑, 운영 서비스 적용률 100%'
    ],
    stack: 'Spring Boot · MyBatis · Gradle · Socket'
  },
  {
    company: '오픈메이트',
    period: '2025.03 ~ 2025.05',
    title: 'BGF 리테일 Map BGF System',
    description: 'BGF 리테일 내부 점포 관리 시스템',
    bullets: [
      '3사경합점/SSM 관리 기능 개발',
      '다음 주소 팝업을 외부에서 재사용 가능하도록 iframe 제공'
    ],
    stack: 'Spring Boot · MyBatis · Java · Gradle'
  },
  {
    company: '오픈메이트',
    period: '2025.03 ~ 2025.03',
    title: '사내 업무실적 관리 시스템',
    description: '전사 월/주 단위 실적 기록·분석 시스템 (대시보드/차트 포함)',
    bullets: [
      'JSP + jQuery UI 및 백엔드 API 설계·구현',
      'Chart.js로 부서/직원별 비교 및 누적 그래프 시각화',
      'DB 모델링, MyBatis 매핑, API, 화면 등 전반 설계/개발',
      '다중 조건 검색/리스트 최적화(필터/페이징)',
      '성과: 보고 시간 30% 단축, 리더십 만족도 95% 달성(시각화 도입)'
    ],
    stack: 'Spring Boot · MyBatis · JSP · JavaScript · jQuery · Bootstrap 5 · Chart.js · PostgreSQL · Jenkins'
  },
  {
    company: '오픈메이트',
    period: '2025.02 ~ 2025.03',
    title: '사내 고객사 명함 관리 시스템',
    description: 'KakaoMap 기반 지도 명함 관리(위치 시각화/길찾기) 시스템 신규 개발',
    bullets: [
      '명함 CRUD + 주소 기반 위치 검색 + 좌표 변환 + 마커 표출',
      '마커 클릭 시 상세/중심 이동/길찾기 등 인터랙션',
      '프론트/백엔드 전반 구현',
      '성과: 영업팀 위치/명함 문의 40%↓, 탐색 시간 5분 → 1분 이하, 데이터 일관성 향상'
    ],
    stack: 'Spring Boot · MyBatis · JSP · JavaScript · jQuery · Bootstrap 5 · PostgreSQL · KakaoMap API · Jenkins'
  },
  {
    company: '롯데이노베이트',
    period: '2024.07 ~ 진행중',
    title: '코리아세븐 GIS 시스템 유지보수',
    description: '점포 운영팀용 GIS 시스템 성능/보안 개선',
    bullets: [
      'OpenLayers 마커 렌더/클릭 이벤트 개선 및 성능 최적화',
      'XSS 대응(c:out/escape), GET→POST 전환, 관리자 인증 강화',
      '성과: 보안 점검 100% 통과, 지도 로딩 ~20% 개선, 사용자 오류 문의 감소'
    ],
    stack: 'Spring MVC · MyBatis · JSP · JavaScript · jQuery · PostgreSQL · KakaoMap API · Jenkins'
  },
  {
    company: '오픈메이트',
    period: '2024.09 ~ 2024.10',
    title: '주소정제 지오코딩 서비스 마이그레이션',
    description: 'Spring Legacy → Spring Boot 전환으로 유지보수성/확장성 개선',
    bullets: [
      'XML 설정 제거, Java Config 전환 및 구조 단순화',
      'KakaoMap 주소 자동완성/좌표 변환 기능 이전 및 개선',
      'MyBatis 매핑 리팩토링, SQL 튜닝, JSP/JS 예외 처리 강화',
      '성과: 배포 효율 2배↑(WAR→JAR, CI/CD), 404/500 월 15건→0건'
    ],
    stack: 'Spring Boot · MyBatis · JSP · JavaScript · jQuery · KakaoMap API · PostgreSQL'
  },
  {
    company: 'GS리테일',
    period: '2024.07 ~ 2024.07',
    title: 'GS 리테일 점포관리 시스템 유지보수',
    description: '지도 기능 개선/보안 강화',
    bullets: [
      'KakaoMap 마커/반경 기능 개선 및 반응성 최적화',
      'XSS/iframe/HTTP Method 제한 등 보안 이슈 대응',
      '성과: 지도 오류율 월 10건→2건 이하, 보안 점검 100% 통과, 온보딩 시간 40% 절감'
    ],
    stack: 'Spring Boot · MyBatis · JSP · JavaScript · jQuery · PostgreSQL · KakaoMap API'
  },
  {
    company: '오픈메이트',
    period: '2024.03 ~ 2024.04',
    title: '상권분석 솔루션 개발',
    description: '지도+차트 기반 상권 분석 리포트 B2B 솔루션',
    bullets: [
      'Chart.js로 유동인구/매출 추이 등 지표 시각화',
      'KakaoMap 반경/매물/상권-매출 매핑 구현',
      '백엔드 API 및 데이터 정제 로직 개발',
      '성과: 사용자 이해도 90%+, 초기 고객 도입 후 3사 추가 납품, 문의 50%↓'
    ],
    stack: 'Spring Boot · MyBatis · JSP · JavaScript · jQuery · PostgreSQL · KakaoMap API · Chart.js · Jenkins'
  },
  {
    company: '오픈메이트',
    period: '2023.07 ~ 2023.10',
    title: '사내 회의실 예약 시스템',
    description: '웹/WebView 동시 지원, MS Teams 연동 예약 시스템',
    bullets: [
      'Azure OAuth2 기반 SSO, 예약 시 Teams 자동 알림',
      '공통 모듈화(페이징/예외/보안/설정), WebView 앱(iOS/Android)',
      '성과: 예약률 30%↑, 중복예약 70%↓, 유지보수/온보딩 40%↓'
    ],
    stack: 'Spring Boot · MyBatis · PostgreSQL · JSP · JavaScript · jQuery · Jenkins · Kotlin(Android) · Swift(iOS)'
  },
  {
    company: '중앙일보',
    period: '2023.07 ~ 2023.07',
    title: '상권정보 서비스 유지보수',
    description: '행정구역 개편(특별자치도) 대응 및 쿼리/지도 로직 개선',
    bullets: [
      '법정동 코드 반영(DB/쿼리/프론트 일괄 수정)',
      'KakaoMap 상권 영역 표출/검색 로직 재구성, 인덱스/필터 최적화',
      '성과: 변경 대응 100%, 검색 정확도 100% 및 민원 0건'
    ],
    stack: 'Spring MVC · MyBatis · PostgreSQL · JSP · JavaScript · jQuery'
  },
  {
    company: '창원시청',
    period: '2023.07 ~ 진행중',
    title: '빅데이터 포털 · 주민자치 소통맵 유지보수',
    description: 'GeoServer/OpenLayers 지도 콘텐츠 개선 및 SSL 운영 강화',
    bullets: [
      '대시보드-지도 연계 오류 수정 및 UI 동기화',
      'GeoServer 경계/이슈 레이어 스타일/오류 개선',
      'SSL 갱신/자동화 제안, 지도 인터랙션/필터 UX 개선',
      '성과: 지도 로딩 30%↑, 인증 만료 이슈 예방, 지도 관련 문의 월 10건→2건 이하'
    ],
    stack: 'Spring MVC · JSP · JavaScript · jQuery · PostgreSQL · GeoServer · OpenLayers'
  },
  {
    company: '광진구청',
    period: '2023.07 ~ 진행중',
    title: '빅데이터 분석 사이트 유지보수',
    description: '공공데이터 지도 시각화 플랫폼 기능/보안 강화',
    bullets: [
      '파일 업로드 안정성 및 예외 처리 강화, 내부/외부망 보안 기준 준수',
      'GeoServer 업그레이드, OpenLayers 시각화 개선',
      '크로스 브라우징 이슈 해결, 스마트그늘막 오픈API MBR 필터 추가',
      '성과: 지도 실패율 10%→1% 이하, 보안 점검 통과, 레이어 로딩 25%↑'
    ],
    stack: 'Spring MVC · MyBatis · PostgreSQL · JSP · JavaScript · jQuery · GeoServer · OpenLayers'
  },
  {
    company: '하이트진로',
    period: '2023.07 ~ 진행중',
    title: '오아시스 상권분석 시스템 유지보수',
    description: '대용량 히트맵/조직 관리/보안/엑셀 다운로드 개선',
    bullets: [
      '20만+ 데이터 배치 OOM/트랜잭션 충돌 해결, 조직도 관리 기능 강화',
      '엑셀 다운로드 한글/필터/페이징 호환 개선, HTTPS 전환',
      'GeoServer 히트맵 좌표 표출 오류 제거',
      '성과: 배치 성공률 100%, 조직 관리 문의 75%↓, 보안/안정화 달성'
    ],
    stack: 'Spring MVC · MyBatis · PostgreSQL · JSP · JavaScript · jQuery · GeoServer · OpenLayers'
  },
  {
    company: 'LG U+',
    period: '2023.07 ~ 2023.12',
    title: '우리가게 패키지 유지보수(하이브리드 상권분석 앱)',
    description: '지도 오류/보안 점검 대응/외부 API 안정화',
    bullets: [
      'QA 30+건 전건 처리, Google Chart 가로모드 왜곡 수정',
      '중복 API 호출 제거, CORS/외부 인증 안정화',
      'Metieye 웹쉘/무결성 대응, OpenLayers+GeoServer 지도 오류 개선',
      '성과: QA 오류 0건, 보안 100% 통과, API 요청량 ~25% 감소'
    ],
    stack: 'Spring MVC · MyBatis · PostgreSQL · JSP · JavaScript · jQuery · OpenLayers · GeoServer · Bamboo'
  },
  {
    company: '오픈메이트',
    period: '2023.02 ~ 2023.12',
    title: '오픈메이트 홈페이지 · TREND-ON',
    description: '지도 기반 통계 시각화/SSL/크로스 브라우징 개선',
    bullets: [
      'Leaflet.js 기반 소비/유동인구 시각화 및 오류 수정',
      'SSL 갱신/HTTPS 전환, 통계 데이터 정확도 점검 체계화',
      '크로스 브라우징/반응형 개선',
      '성과: 지도 로딩 39% 개선(1.8s→1.1s), 보안 만료 0건, 시각화 문의 월 10건→2건'
    ],
    stack: 'Spring MVC · MyBatis · PostgreSQL · JSP · JavaScript · jQuery · Leaflet.js'
  },
  {
    company: '투썸플레이스',
    period: '2023.02 ~ 진행중',
    title: 'MAST 유지보수(입지 전략 분석 시스템)',
    description: '상생반경/유사매장 분석/좌표·주소 변환 API',
    bullets: [
      '지역별 반경 자동 시각화(500m/1000m), 반경 편집/삭제 인터랙션',
      '내부 DB 기반 좌표/주소 변환 API로 외부 의존 제거',
      '유사 가맹점 탐색 알고리즘 및 지도 시각화',
      '성과: 입지 전략 수립 시간 30%↓, 자동 분석 활용도 2배, 변환 응답 ~40%↑'
    ],
    stack: 'Spring MVC · MyBatis · PostgreSQL · JSP · JavaScript · jQuery · Leaflet.js · GeoServer'
  },
  {
    company: '고양시청',
    period: '2023.02 ~ 2024.01',
    title: '열린 데이터 세상 유지보수',
    description: '내/외부망 분리 운영, 지도 시각화 안정화, SVN 도입',
    bullets: [
      'OpenLayers 공공 데이터 레이어 누락/오류 수정',
      '운영환경 분리 이슈 해결(권한/경로), 폐쇄망 SVN 설치/권한 체계',
      'GeoServer WMS/WFS 성능 개선',
      '성과: 시각화 안정성 80%↑, 코드 충돌/유실 방지, 장애 문의 12건→3건'
    ],
    stack: 'Spring · MyBatis · PostgreSQL · JSP · JavaScript · jQuery · OpenLayers · GeoServer · CentOS · SVN'
  },
  {
    company: '서울시',
    period: '2022.04 ~ 2024.01',
    title: '상권분석 서비스(골목상권 모아보기) 유지보수',
    description: '접근성 개선, 지도 오류 수정, API 통합, 보안/인프라 대응',
    bullets: [
      'GeoServer+OpenLayers 시각화, geometry→WKT simplify 오류 수정',
      '시각장애인 대체 그래프, 명도/반응형, 모바일 최적화',
      '공지/검색 API 연동, 배너 관리, SSL/보안/라이선스 갱신',
      '성과: 접근성 50→91점, 지도 오류 민원 0건, 모바일 이탈 20%↓, 무중단 운영'
    ],
    stack: 'Spring · MyBatis · PostgreSQL · Oracle · JSP · JavaScript · jQuery · OpenLayers · GeoServer · eGov 3.0 · WebtoB · Jeus'
  },
  {
    company: '한국산업단지공단',
    period: '2022.02 ~ 2023.12',
    title: '팩토리온 유지보수',
    description: '업종별 대시보드/전국 산업단지 지도/건축물 대장/보안·성능 고도화',
    bullets: [
      '업종 통계 대시보드, 산업단지 위치/영역 시각화',
      '건축물 대장 화면·DB 설계, 권한 기반 접근 제어',
      'XSS 대응, 다운로드 방식 개선, 쿼리 성능 튜닝',
      '성과: 보안 감사 100% 대응, 지도 로딩 ~35%↑, 민원 50%↓'
    ],
    stack: 'Spring · MyBatis · PostgreSQL · JSP · JavaScript · jQuery · OpenLayers · GeoServer'
  },
  {
    company: '한국야쿠르트',
    period: '2021.11 ~ 2022.01',
    title: '제휴업체 주소 기반 배송 API 및 Admin',
    description: '주소 기반 배송 가능 요일/시간대 반환 API + Nexacro Admin',
    bullets: [
      'OAuth2 인증 연동, 예외/응답 구조 포함 API 전반 설계/구현',
      'Admin에서 로그 조회/권한별 관리, 주소 검색/정제 제공',
      '성과: API 응답 정확도 98%+, 주요 제휴사 3곳 연동, 관리 효율 60%↑'
    ],
    stack: 'Spring Boot · MyBatis · PostgreSQL · JSP · JavaScript · jQuery · Nexacro'
  },
  {
    company: '한국GM',
    period: '2021.01 ~ 2021.05',
    title: '쉐보레 이커머스(온라인샵) 개발',
    description: '계약 연동 API/알림톡/Excel 출력/Swagger 외부 테스트 환경',
    bullets: [
      '계약서 API 인터페이스 설계 및 연동, 데이터 정합성 확보',
      '알림톡 자동 발송/재전송, JXLS Excel 템플릿 출력',
      'Swagger UI 기반 파트너 테스트 환경 제공',
      '성과: 연동 기간 30% 단축, 문서 유지보수 50% 절감, 업무 20시간/월 절감'
    ],
    stack: 'Spring Boot · MyBatis · MariaDB · JSP · jQuery · JSTL · JXLS · Swagger'
  },
  {
    company: '한국GM',
    period: '2018.01 ~ 2021.05',
    title: '쉐보레 전자계약서(S-Work) 유지보수/리팩토링',
    description: 'Legacy(AngularJS) → Spring Boot+jQuery 전환, 문서/푸시/보안/인프라 개선',
    bullets: [
      'Apache POI Excel, PhantomJS PDF 생성(Base64 이미지) 개선',
      '시간대별 전송 제한, 카드사(삼성/롯데) 연동, 실패 자동 재전송',
      'Firebase Push 고도화, Google OTP 2FA, 문자/알림톡/팩스 발송',
      'OpenAPI(도로명)·스케줄러 배치, 보안/해킹 대응',
      '성과: 전송 오류율 80%↓, 코드 복잡도 ~40%↓, 보안 사고 재발 0건'
    ],
    stack: 'Spring Boot · MyBatis · MariaDB · JSP · jQuery · JSTL · Firebase · Apache POI · PhantomJS'
  },
  {
    company: '사내 프로젝트',
    period: '2020.01 ~ 2020.08',
    title: '3D 영상 플레이어 하이브리드앱',
    description: 'WebView 기반 3D 콘텐츠 재생 앱, 다국어/SNS 로그인, 관리자 시스템',
    bullets: [
      'Web-Native Bridge, 다국어(ko/en/zh), OAuth2(Google/Kakao) 로그인',
      '콘텐츠/회원/메시지 Admin, 전시(상하이 IT 박람회) 대응',
      '성과: 전시 출품 성공, SNS 로그인 도입 후 이탈률 20%↓'
    ],
    stack: 'Spring Boot · MyBatis · MariaDB · JSP · jQuery · JSTL'
  },
  {
    company: '한국TDB',
    period: '2019.11 ~ 2020.01',
    title: '신용정보 기업정보 작성 시스템',
    description: '기업 신용정보 CRUD, 권한/업무 관리, PDF 경량화',
    bullets: [
      '입력/수정/검수/이력 관리, 검색/필터/결과 확인',
      '권한/접근 로그, 단계별(작성/검토/승인) 분기 처리',
      'PDF 이미지/폰트 최적화로 해외 전송 용량 이슈 해결',
      '성과: PDF 70% 경량화, 작성 시간 30% 단축'
    ],
    stack: 'Spring Boot · MariaDB · JSP · JavaScript · jQuery · JSTL'
  },
  {
    company: '고양 YMCA',
    period: '2019.06 ~ 2019.10',
    title: '피트니스 센터 예약 시스템',
    description: '수강/예약/결제/관리자 기능 통합, 다기관 대응',
    bullets: [
      '중복 신청 방지/자동 마감, PG 연동 안정화',
      '공지/갤러리/게시판 등 커뮤니케이션 기능 및 관리자 CRUD',
      '성과: 운영 자동화로 업무량 50%↓, 결제 오류 0%, 현장 응대 1시간/일 절감'
    ],
    stack: 'Spring Boot · MyBatis · MariaDB · JSP · jQuery · JSTL'
  },
  {
    company: '포디웰컴',
    period: '2019.05 ~ 2019.06',
    title: '주문·재고 관리 웹사이트',
    description: '주문/출고/재고, 회원·임직원 관리 통합 백오피스',
    bullets: [
      '입·출고 이력 추적 및 자동 재고 업데이트',
      '권한 기반 접근제어, 품목/사용자/로그 이력 관리',
      '성과: 재고 오류 0%, 처리시간 평균 3분 이내, 업무 효율 50%↑'
    ],
    stack: 'Spring Boot · MyBatis · MariaDB · JSP · jQuery · JSTL'
  },
  {
    company: '사내 프로젝트',
    period: '2019.01 ~ 2019.05',
    title: '그룹웨어 하이브리드앱 & 관리자',
    description: '공지/자산/명함/푸시 통합, 2FA 및 스케줄러 자동화',
    bullets: [
      'WebView 앱, 관리자 공지/갤러리/푸시, 자산/명함 관리',
      'Google OTP 2FA, 스케줄러 기반 자동화',
      '성과: 전사 100% 도입, 공지 누락 80%↓, 수작업 90% 자동화'
    ],
    stack: 'Spring Boot · MyBatis · MariaDB · JSP · jQuery · JSTL'
  }
] as const

// =============================================================

const projects = [
  {
    title: 'todo',
    stack: 'React Ts, Spring Jpa, Querydsl, Vercel, Koyeb, Supabase',
    desc: '필자가 매일 강의를 들어서 안들었던 날짜 체크하는 용도로 만듬',
    image: '/assets/img/todo.png',
    demo: 'https://frontend-todo-dusky-delta.vercel.app',
    repo: 'https://github.com/aamoos/frontend-todo'
  },
  {
    title: 'weather',
    stack: 'Vue 3 · Vuetify · TypeScript · OpenWeather · Leaflet',
    desc: 'OpenWeatherMap + Leaflet.js로 주요 도시의 실시간 날씨를 지도 라벨로 시각화. 도시 자동완성 검색 제공.',
    image: '/assets/img/portfolio-weather.png',
    demo: 'https://vue3-typescript-openweather.vercel.app',
    repo: 'https://github.com/aamoos/vue3-typescript-openweather'
  },
  {
    title: 'stock',
    stack: 'Vue 3 · Vuetify (FE) · Spring Boot 3 · JPA (BE)',
    desc: '미국 주식 인기차트/실시간 차트/재무제표 조회.',
    image: '/assets/img/portfolio-stock.png',
    demo: '',
    repo: 'https://github.com/aamoos/vue-stock'
    // BE: https://github.com/aamoos/stock-backend
  },
  {
    title: 'lotto',
    stack: 'Spring Boot 3.4.5 · JPA · QueryDSL · Thymeleaf',
    desc: '로또 번호 빈도 분석 및 번호 생성기. 매일 자정 동행복권 API로 최신 회차 수집, 상위 15개 빈출 숫자 기반 추천.',
    image: '/assets/img/portfolio-lotto.png',
    demo: '',
    repo: 'https://github.com/aamoos/lotto'
  },
  {
    title: 'backendTask',
    stack: 'Spring Boot · JPA · JWT',
    desc: '백엔드 과제 모음: REST API, 인증, DB 모델링/CRUD, 게시판 등.',
    image: '/assets/img/portfolio-backendTask.png',
    demo: '',
    repo: 'https://github.com/aamoos/backendTask'
  },
  {
    title: 'favorite-song',
    stack: 'Vue 3 · Tailwind · Spring Boot · JPA · OAuth2/JWT',
    desc: '애창곡 검색/즐겨찾기, OpenAPI 기반 노래 검색, 유튜브 연결, 소셜 로그인. Android WebView 하이브리드 앱.',
    image: '/assets/img/portfolio-favoritesong.png',
    repo: 'https://github.com/aamoos/favorite-song'
    // BE: https://github.com/aamoos/favoriteSongBackend
    // Android: https://github.com/aamoos/favortie-song-webview-android
  },
  {
    title: 'Hellzzang',
    stack: 'Vue 3 · SCSS · Bootstrap5 · Spring Boot · JPA',
    desc: '헬스 커뮤니티/콘텐츠. 운동 계획/캘린더 기록, 차트, 광고 이미지 스와이퍼, 커뮤니티/상품 화면.',
    image: '/assets/img/portfolio-hellzzang.png',
    demo: '',
    repo: 'https://github.com/aamoos/hellzzang_frontend'
    // BE: https://github.com/aamoos/hellzzang_backend
    // ADMIN: https://github.com/aamoos/hellzzang_admin
    // ANDROID: https://github.com/aamoos/hellzzang_webview
  },
  {
    title: 'Travel',
    stack: 'Spring Boot · JPA · Thymeleaf · Bootstrap',
    desc: '스토리(사진/텍스트) 기록 반응형 웹. 이미지 뷰어, 멀티파일 업로드, CRUD.',
    image: '/assets/img/portfolio-travel.jpg',
    demo: '',
    repo: 'https://github.com/aamoos/travel'
    // ANDROID: https://github.com/aamoos/TravelWebview
  },
  {
    title: 'Chats',
    stack: 'Spring Boot · JPA · Thymeleaf · Firebase Push',
    desc: '로그인/회원가입, 푸시 알림, 친구 추가, 채팅(실시간 소켓 제외) 기능.',
    image: '/assets/img/portfolio-chats.png',
    demo: '',
    repo: 'https://github.com/aamoos/chats'
    // ANDROID: https://github.com/aamoos/chatsWebView
  },
  {
    title: 'mathematics-workbook',
    stack: 'JavaScript · jQuery',
    desc: '학원 수업용 랜덤 수학 문제집(덧셈/곱셈 중심). 100문제 제한시간 채점, 오답 감점.',
    image: '/assets/img/portfolio-mathematics-workbook.gif',
    demo: 'https://mathematics-workbook.vercel.app',
    repo: 'https://github.com/aamoos/mathematics-workbook'
  }
] as const


const form = ref({ name: '', email: '', message: '' })
const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)

function scrollTo(section: keyof typeof ids) {
  const el = document.getElementById(ids[section])
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function toggleTheme() {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}

</script>

<style scoped>
/* App background: subtle gradient + grid, theme-aware */
.app-main {
  min-height: 100%;
  background-color: rgb(var(--v-theme-background));
  background-image:
    radial-gradient(1200px 1200px at -10% -10%, rgba(var(--v-theme-primary), 0.08), transparent 60%),
    radial-gradient(1000px 1000px at 110% -10%, rgba(var(--v-theme-accent), 0.07), transparent 55%),
    radial-gradient(800px 800px at 50% 120%, rgba(var(--v-theme-secondary), 0.06), transparent 60%),
    repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(var(--v-theme-on-surface), 0.03) 25px),
    repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(var(--v-theme-on-surface), 0.03) 25px);
  background-blend-mode: screen, screen, multiply, normal, normal;
}

/* Slightly stronger overlays in dark mode for contrast */
.v-theme--dark .app-main {
  background-image:
    radial-gradient(1200px 1200px at -10% -10%, rgba(var(--v-theme-primary), 0.12), transparent 60%),
    radial-gradient(1000px 1000px at 110% -10%, rgba(var(--v-theme-accent), 0.10), transparent 55%),
    radial-gradient(800px 800px at 50% 120%, rgba(var(--v-theme-secondary), 0.08), transparent 60%),
    repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(var(--v-theme-on-surface), 0.06) 25px),
    repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(var(--v-theme-on-surface), 0.06) 25px);
  background-blend-mode: screen, screen, normal, normal, normal;
}
section {
  scroll-margin-top: 72px;
}
.preline { white-space: pre-line; }
</style>
<style scoped>
/* Header: glass background + stronger text for readability */
.app-header {
  /* keep it subtle but readable over imagery */
  background-color: rgba(var(--v-theme-surface), 0.75);
  backdrop-filter: saturate(120%) blur(8px);
  -webkit-backdrop-filter: saturate(120%) blur(8px);
  border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.06);
}
.app-header .v-app-bar-title,
.app-header .v-btn,
.app-header .v-btn .v-btn__content {
  color: rgb(var(--v-theme-on-surface));
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
}
.v-theme--dark .app-header {
  background-color: rgba(var(--v-theme-surface), 0.68);
  border-bottom-color: rgba(255, 255, 255, 0.08);
}

/* Hero: bold cover image with gradient overlay and subtle parallax */
.hero-section {
  position: relative;
  background-image:
    linear-gradient(90deg, rgba(var(--v-theme-background), 0.70), rgba(var(--v-theme-background), 0.25)),
    url('/assets/img/bg-hero.jpg');
  background-size: cover;
  /* Focus a bit higher to prevent key subject being cropped */
  background-position: 50% 30%;
  background-attachment: fixed;
  border-radius: 16px;
  overflow: hidden;
  /* Keep a consistent canvas so cover doesn't over-crop */
  min-height: clamp(420px, 70vh, 880px);
}
.v-theme--dark .hero-section {
  background-image:
    linear-gradient(90deg, rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.35)),
    url('/assets/img/bg-hero.jpg');
}

/* Avoid fixed background quirks and harsh cropping on small screens */
@media (max-width: 960px) {
  .hero-section {
    background-attachment: scroll;
    background-position: 50% 35%;
  }
}

/* Make global background more visible */
.app-main {
  background-image:
    radial-gradient(1200px 1200px at -10% -10%, rgba(var(--v-theme-primary), 0.14), transparent 60%),
    radial-gradient(1000px 1000px at 110% -10%, rgba(var(--v-theme-accent), 0.12), transparent 55%),
    radial-gradient(800px 800px at 50% 120%, rgba(var(--v-theme-secondary), 0.10), transparent 60%),
    repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(var(--v-theme-on-surface), 0.06) 25px),
    repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(var(--v-theme-on-surface), 0.06) 25px);
}
.v-theme--dark .app-main {
  background-image:
    radial-gradient(1200px 1200px at -10% -10%, rgba(var(--v-theme-primary), 0.20), transparent 60%),
    radial-gradient(1000px 1000px at 110% -10%, rgba(var(--v-theme-accent), 0.18), transparent 55%),
    radial-gradient(800px 800px at 50% 120%, rgba(var(--v-theme-secondary), 0.16), transparent 60%),
    repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(var(--v-theme-on-surface), 0.10) 25px),
    repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(var(--v-theme-on-surface), 0.10) 25px);
}

/* Decorative angle sheen for portfolio feel */
.hero-section::after {
  content: '';
  position: absolute;
  top: -30%;
  right: -20%;
  width: 60%;
  height: 160%;
  background: radial-gradient(closest-side, rgba(var(--v-theme-primary), 0.18), transparent 70%);
  transform: rotate(25deg);
  pointer-events: none;
}
</style>
