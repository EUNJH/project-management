import { Project } from '@/types/project';

export const mockProjects: Project[] = [
  {
    id: '1',
    title: '웹사이트 리디자인',
    description: '회사 웹사이트의 사용자 경험을 개선하고 최신 디자인 트렌드를 적용하는 프로젝트',
    status: 'active',
    progress: 65,
    dueDate: '2024-03-15',
    members: [
      { id: '1', name: '김민수', avatar: '/api/placeholder/32/32' },
      { id: '2', name: '이지은', avatar: '/api/placeholder/32/32' },
      { id: '3', name: '박준호', avatar: '/api/placeholder/32/32' },
      { id: '4', name: '최예린' }
    ]
  },
  {
    id: '2',
    title: '모바일 앱 개발',
    description: '크로스 플랫폼 모바일 애플리케이션 개발 프로젝트',
    status: 'active',
    progress: 35,
    dueDate: '2024-04-30',
    members: [
      { id: '5', name: '정승훈', avatar: '/api/placeholder/32/32' },
      { id: '6', name: '한소희', avatar: '/api/placeholder/32/32' },
      { id: '7', name: '임재현', avatar: '/api/placeholder/32/32' }
    ]
  },
  {
    id: '3',
    title: '데이터 분석 대시보드',
    description: '실시간 데이터 시각화 및 분석 대시보드 구축',
    status: 'completed',
    progress: 100,
    dueDate: '2024-02-28',
    members: [
      { id: '8', name: '송민아', avatar: '/api/placeholder/32/32' },
      { id: '9', name: '강현우', avatar: '/api/placeholder/32/32' }
    ]
  },
  {
    id: '4',
    title: 'API 서버 마이그레이션',
    description: 'RESTful API를 GraphQL로 마이그레이션하는 프로젝트',
    status: 'pending',
    progress: 0,
    dueDate: '2024-05-15',
    members: [
      { id: '10', name: '오태현', avatar: '/api/placeholder/32/32' },
      { id: '11', name: '류지원', avatar: '/api/placeholder/32/32' },
      { id: '12', name: '백승민', avatar: '/api/placeholder/32/32' }
    ]
  },
  {
    id: '5',
    title: '보안 시스템 강화',
    description: '전사 보안 시스템 감사 및 개선 프로젝트',
    status: 'active',
    progress: 82,
    dueDate: '2024-03-30',
    members: [
      { id: '13', name: '신동엽', avatar: '/api/placeholder/32/32' },
      { id: '14', name: '장미란', avatar: '/api/placeholder/32/32' },
      { id: '15', name: '황준석', avatar: '/api/placeholder/32/32' },
      { id: '16', name: '김태리', avatar: '/api/placeholder/32/32' }
    ]
  },
  {
    id: '6',
    title: '사용자 분석 리포트',
    description: '2024년 1분기 사용자 행동 분석 및 인사이트 도출',
    status: 'completed',
    progress: 100,
    dueDate: '2024-03-01',
    members: [
      { id: '17', name: '조현우', avatar: '/api/placeholder/32/32' },
      { id: '18', name: '윤서연', avatar: '/api/placeholder/32/32' }
    ]
  },
  {
    id: '7',
    title: 'CI/CD 파이프라인 구축',
    description: '개발 및 배포 프로세스 자동화 환경 구축',
    status: 'active',
    progress: 45,
    dueDate: '2024-04-15',
    members: [
      { id: '19', name: '권영민', avatar: '/api/placeholder/32/32' },
      { id: '20', name: '이하늬', avatar: '/api/placeholder/32/32' },
      { id: '21', name: '남주혁', avatar: '/api/placeholder/32/32' }
    ]
  }
];