const uniqueIdentifier = "JWK-WEDDING-TEMPLATE-V1";

// 갤러리 레이아웃 타입 정의
type GalleryLayout = "scroll" | "grid";
type GalleryPosition = "middle" | "bottom";

interface GalleryConfig {
  layout: GalleryLayout;
  position: GalleryPosition;
  images: string[];
}

export const weddingConfig = {
  // 메타 정보
  meta: {
    title: "신랑 김수성 ❤️ 신부 이기은의 결혼식에 초대합니다",
    description: "결혼식 초대장",
    ogImage: "/images/ha0h-1fsi-bqt3.jpg",
    noIndex: true,
    _jwk_watermark_id: uniqueIdentifier,
  },

  // 메인 화면
  main: {
    title: "Wedding Invitation",
    image: "/images/ha0h-1fsi-bqt3.jpg",
    date: "2026년 8월 23일 일요일 15시 00분",
    venue: "오드힐 하우스"
  },

  // 소개글
  intro: {
    title: "",
    text: "서로를 바라보며 걸어온\n소중한 발걸음이\n이제 하나의 길로 이어집니다.\n\n사랑과 믿음으로\n새 가정을 이루는 저희 두 사람의\n작은 시작을 알려드립니다."
  },

  // 결혼식 일정
  date: {
    year: 2026,
    month: 8,
    day: 23,
    hour: 15,
    minute: 0,
    displayDate: "2026.08.23 SUN PM 15:00",
  },

  // 장소 정보
  venue: {
    name: "오드힐하우스",
    address: "서울특별시 서초구 방배로 47\n오드힐하우스",
    tel: "0507-1410-5038",
    naverMapId: "오드힐하우스", // 네이버 지도 검색용 장소명
    coordinates: {
      latitude: 37.481232,
      longitude: 126.997635,
    },
    placeId: "1319208753", // 네이버 지도 장소 ID
    mapZoom: "17", // 지도 줌 레벨
    mapNaverCoordinates: "126.997635,37.481232,오드힐하우스", // 네이버 지도 길찾기 URL용 좌표 파라미터 (구 형식)
    transportation: {
      subway: "2호선 방배역 2번 출구 (도보 3분)",
      bus: "하차: 방배역, 방배임광아파트\n간선: 142, 350, 406, 461, N61, N64, N75\n마을: 서초07, 서초13, 서초15, 서초16, 서초17",
    },
    parking: "건물 지하 주차장 이용 가능 (2시간 무료)",
    // 신랑측 배차 안내
    groomShuttle: {
      location: "신랑측 배차 출발지",
      departureTime: "오전 10시 30분 출발",
      contact: {
        name: "담당자명",
        tel: "010-1234-5678"
      }
    },
    // 신부측 배차 안내
    brideShuttle: {
      location: "신부측 배차 출발지",
      departureTime: "오전 11시 출발",
      contact: {
        name: "담당자명",
        tel: "010-9876-5432"
      }
    }
  },

  // 갤러리
  gallery: {
    layout: "grid" as GalleryLayout, // "scroll" 또는 "grid" 선택
    position: "bottom" as GalleryPosition, // "middle" (현재 위치) 또는 "bottom" (맨 하단) 선택
    images: [
      "/images/gallery/image1.jpg",
      "/images/gallery/image2.jpg",
      "/images/gallery/image3.jpg",
      "/images/gallery/image4.jpg",
      "/images/gallery/image5.jpg",
      "/images/gallery/image6.jpg",
      "/images/gallery/image7.jpg",
      "/images/gallery/image8.jpg",
      "/images/gallery/image9.jpg",
    ],
  } as GalleryConfig,

  // 초대의 말씀
  invitation: {
    message: "한 줄기 별빛이 되어 만난 인연\n평생을 함께 걸어가려 합니다.\n\n소중한 분들의 축복 속에\n저희 두 사람이 첫 걸음을 내딛습니다.\n\n귀한 시간 내어 함께해 주신다면\n그 어떤 축복보다 값진 선물이 될 것입니다.",
    groom: {
      name: "김수성",
      label: "아들",
      father: "김성일",
      mother: "이은향",
    },
    bride: {
      name: "이기은",
      label: "딸",
      father: "이해일",
      mother: "홍미숙",
    },
  },

  // 계좌번호
  account: {
    groom: {
      bank: "국민은행",
      number: "046802-04-164144",
      holder: "김수성",
    },
    bride: {
      bank: "카카오뱅크",
      number: "3333-11-2248976",
      holder: "이기은",
    },
        groomFather: {
      bank: "은행명",
      number: "111-222-333444",
      holder: "신랑아버지",
    },
    groomMother: {
      bank: "은행명",
      number: "555-666-777888",
      holder: "신랑어머니",
    },
    brideFather: {
      bank: "은행명",
      number: "999-000-111222",
      holder: "신부아버지",
    },
    brideMother: {
      bank: "은행명",
      number: "333-444-555666",
      holder: "신부어머니",
    },
  },

  // RSVP 설정
  rsvp: {
    enabled: false, // RSVP 섹션 표시 여부
    showMealOption: false, // 식사 여부 입력 옵션 표시 여부
  },

  // 슬랙 알림 설정
  slack: {
    webhookUrl: process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL || "",
    channel: "#wedding-response",
    compactMessage: true, // 슬랙 메시지를 간결하게 표시
  },
}; 
