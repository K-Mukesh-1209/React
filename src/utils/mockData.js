const resList =[
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
            "collectionId": "83639",
            "title": "Biryani",
            "description": "Taste these delectable classics, delectable biryanis to make your day.",
            "imageId": "COLLECTIONS/IMAGES/MERCH/2025/3/7/6b765643-8f10-4176-b1f4-5e096d4182c0_biryani nv (3) (1).png",
            "aspectRatio": "3.44",
            "cta": {
              "link": "swiggy://collectionV2?collection_id=83639&tags=layout_CCS_Biryani,biryani,ads_pc_biryani",
              "type": "collectionv2"
            },
            "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
            "count": "314 restaurants"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
            "sortConfigs": [
              {
                "key": "relevance",
                "title": "Relevance (Default)",
                "selected": true,
                "defaultSelection": true
              },
              {
                "key": "deliveryTimeAsc",
                "title": "Delivery Time"
              },
              {
                "key": "modelBasedRatingDesc",
                "title": "Rating"
              },
              {
                "key": "costForTwoAsc",
                "title": "Cost: Low to High"
              },
              {
                "key": "costForTwoDesc",
                "title": "Cost: High to Low"
              }
            ],
            "restaurantCount": 314,
            "facetList": [
              {
                "label": "10 Mins Delivery",
                "id": "isRestaurantBolt",
                "selection": "SELECT_TYPE_SINGLESELECT",
                "facetInfo": [
                  {
                    "label": "10 Mins Delivery",
                    "id": "isRestaurantBoltfacetquery0",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_FLATTENED",
                "subLabel": "Filterby",
                "icon": "COLLECTIONS/IMAGES/MERCH/2024/12/18/4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png",
                "selectedIcon": "COLLECTIONS/IMAGES/MERCH/2024/12/26/3072d307-2f8e-471c-862d-d426fb93c0bf_4b2e8903-0e25-401b-8ede-088491b4cfa0_937977a3-b03b-4a9e-8b6a-24937664d1a9_pic.png"
              },
              {
                "label": "Veg/Non-Veg",
                "id": "isVeg",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Non Veg",
                    "id": "isVegfacetquery0",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Pure Veg",
                    "id": "isVegfacetquery1",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filterby",
                "openFilter": true
              },
              {
                "label": "Ratings",
                "id": "rating",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Ratings",
                    "id": "ratingfacetquery0",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Ratings 4.0+",
                    "id": "ratingfacetquery1",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Ratings 4.5+",
                    "id": "ratingfacetquery2",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filterby",
                "openFilter": true
              },
              {
                "label": "Delivery Time",
                "id": "deliveryTime",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Less than 30 mins",
                    "id": "deliveryTimefacetquery0",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Less than 45 mins",
                    "id": "deliveryTimefacetquery1",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filterby",
                "openFilter": true
              },
              {
                "label": "Cost For Two",
                "id": "costForTwo",
                "selection": "SELECT_TYPE_MULTISELECT",
                "facetInfo": [
                  {
                    "label": "Less than Rs. 300",
                    "id": "costForTwofacetquery0",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Rs.300 - Rs.600",
                    "id": "costForTwofacetquery1",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  },
                  {
                    "label": "Greater than Rs. 600",
                    "id": "costForTwofacetquery2",
                    "analytics": {
                      
                    },
                    "openFilter": true
                  }
                ],
                "viewType": "VIEW_TYPE_HALF_CARD",
                "subLabel": "Filterby",
                "openFilter": true
              }
            ]
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            "layout": {
              "rows": 1,
              "widgetPadding": {
                "left": 16,
                "right": 16
              },
              "scrollBar": {
                
              },
              "widgetTheme": {
                "defaultMode": {
                  "backgroundColour": "#FFFFFF",
                  "theme": "THEME_TYPE_LIGHT"
                },
                "darkMode": {
                  "backgroundColour": "#1B3028",
                  "theme": "THEME_TYPE_DARK"
                }
              }
            },
            "id": "restaurantCountWidget",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
                "text": "314 Restaurants to explore",
                "headerStyling": {
                  "textSize": 15,
                  "textColor": "text_color_highest_emphasis",
                  "textFontName": "FONT_NAME_HEADER_H5",
                  "maxLines": 1
                }
              }
            }
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "21947",
              "name": "My Friends Circle Restaurant",
              "cloudinaryImageId": "9862ca30a502607090b089bb675cf9e3",
              "locality": "Medchal",
              "areaName": "Medchal",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Biryani",
                "Chinese",
                "Kebabs",
                "Tandoor"
              ],
              "avgRating": 4.1,
              "parentId": "19277",
              "avgRatingString": "4.1",
              "totalRatingsString": "229K+",
              "promoted": true,
              "adTrackingId": "cid=26715508~p=0~adgrpid=26715508#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=21947~eid=0ee5fa08-801e-4c03-b87d-82cda2be4797~srvts=1742736989936~collid=83639",
              "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 6.3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "6.3 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-03-24 02:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.0",
                  "ratingCount": "16K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "26715508"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=21947&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "343890",
              "name": "Delite Kitchen",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/26/a2ffe2c8-a006-46ab-a3dc-67927a5ead78_31fd18b1-72d0-44ea-9ae1-44298cb5548a.jpg",
              "locality": "Kompally",
              "areaName": "Kompally",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "North Indian",
                "Chinese",
                "Biryani"
              ],
              "avgRating": 4.3,
              "parentId": "70631",
              "avgRatingString": "4.3",
              "totalRatingsString": "12K+",
              "sla": {
                "deliveryTime": 11,
                "lastMileTravel": 0.8,
                "serviceability": "SERVICEABLE",
                "slaString": "10-15 mins",
                "lastMileTravelString": "0.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-03-23 23:59:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "bolt/bolt%206.png",
                    "description": "bolt!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {
                    
                  },
                  "textBased": {
                    
                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "bolt/bolt%206.png",
                          "description": "bolt!"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹66 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.4",
                  "ratingCount": "6.7K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=343890&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "190812",
              "name": "Hotel Kass",
              "cloudinaryImageId": "qnzap0banpiu7bvcyg9z",
              "locality": "Kompally",
              "areaName": "Kompally",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Biryani",
                "Chinese",
                "North Indian",
                "Tandoor",
                "South Indian",
                "American"
              ],
              "avgRating": 4.3,
              "parentId": "19098",
              "avgRatingString": "4.3",
              "totalRatingsString": "29K+",
              "promoted": true,
              "adTrackingId": "cid=25876041~p=2~adgrpid=25876041#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=190812~eid=970bf960-c23c-4240-abe1-6271a04d17d6~srvts=1742736989936~collid=83639",
              "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 4.6,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "4.6 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-03-24 00:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.1",
                  "ratingCount": "7.0K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "25876041"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=190812&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "626490",
              "name": "Ulavacharu",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/9/17/4a62bfae-7389-47e7-9107-e373aa5dd717_b595684b-60b5-48fa-b0e4-fe9becb76caa.jpg",
              "locality": "Ulavacharu",
              "areaName": "Kompally",
              "costForTwo": "₹450 for two",
              "cuisines": [
                "Biryani",
                "South Indian",
                "North Indian",
                "Tandoor",
                "Chinese",
                "Desserts",
                "Ice Cream"
              ],
              "avgRating": 3.9,
              "parentId": "4365",
              "avgRatingString": "3.9",
              "totalRatingsString": "6.4K+",
              "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-03-23 23:30:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "bolt/bolt%206.png",
                    "description": "bolt!"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "bolt/bolt%206.png",
                          "description": "bolt!"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {
                    
                  },
                  "textBased": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "66% OFF",
                "subHeader": "UPTO ₹126",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=626490&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1057444",
              "name": "Dasara",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/5/f8207792-c170-4560-b501-7aaa4524b802_1057444.jpg",
              "locality": "Alwal",
              "areaName": "Alwal",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Chinese",
                "Andhra",
                "Biryani",
                "North Indian"
              ],
              "avgRating": 4,
              "parentId": "446638",
              "avgRatingString": "4.0",
              "totalRatingsString": "13",
              "promoted": true,
              "adTrackingId": "cid=26394016~p=4~adgrpid=26394016#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1057444~eid=bce0f705-b009-48c3-a4ea-11f79a5dae86~srvts=1742736989936~collid=83639",
              "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 4.4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.4 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-03-23 23:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "15% OFF",
                "subHeader": "UPTO ₹80",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "isNewlyOnboarded": true,
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "26394016"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=1057444&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "93474",
              "name": "Sainma",
              "cloudinaryImageId": "fahi5kgsx6tvvrdc4944",
              "locality": "Kompally",
              "areaName": "Kompally",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Biryani",
                "Chinese",
                "Tandoor",
                "South Indian"
              ],
              "avgRating": 4.2,
              "parentId": "19122",
              "avgRatingString": "4.2",
              "totalRatingsString": "64K+",
              "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-03-23 23:59:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {
                    
                  },
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.0",
                  "ratingCount": "6.5K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=93474&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "792718",
              "name": "Telugu Aromas",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/28/174052ca-cf46-4010-8989-514097fb0035_1c51cc85-feeb-4f0c-aeb0-afb764b704b0.jpg",
              "locality": "NCL Colony",
              "areaName": "Kompally",
              "costForTwo": "₹400 for two",
              "cuisines": [
                "Biryani"
              ],
              "avgRating": 4,
              "parentId": "474343",
              "avgRatingString": "4.0",
              "totalRatingsString": "1.7K+",
              "promoted": true,
              "adTrackingId": "cid=26653414~p=5~adgrpid=26653414#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=792718~eid=cb205ae7-ec41-42b7-864b-01b3ac75a45a~srvts=1742736989936~collid=83639",
              "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 2.8,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "2.8 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-03-23 23:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹127",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "26653414"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=792718&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      }
    ];

export default resList;