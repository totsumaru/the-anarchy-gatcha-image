import { ImageResponse } from 'next/server';

export const runtime = 'edge';

const bronzeImageURL = "https://imagedelivery.net/rsXDEToSLF-yJh1Zowhg1g/b66a55f5-8f3a-4d74-e40b-c990ba176d00/public"
const silverImageURL = "https://imagedelivery.net/rsXDEToSLF-yJh1Zowhg1g/0d4772e5-9363-46f9-44aa-68a22c73dc00/public"
const goldImageURL = "https://imagedelivery.net/rsXDEToSLF-yJh1Zowhg1g/3441660e-1556-46ba-230e-56979b704400/public"
const platinumImageURL = "https://imagedelivery.net/rsXDEToSLF-yJh1Zowhg1g/cca4b555-b6fd-41d9-bbe5-d41f90329000/public"
const diamondImageURL = "https://imagedelivery.net/rsXDEToSLF-yJh1Zowhg1g/987ce784-ff88-464a-8f4b-8a72c143fa00/public"
const crazyImageURL = "https://imagedelivery.net/rsXDEToSLF-yJh1Zowhg1g/bbe42c2c-9994-4476-390e-e903ae82b100/public"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');
  const avatar = searchParams.get('avatar');
  const point = searchParams.get('point');

  let imageURL = ""
  switch (point) {
    case "6":
    case "7":
    case "8":
      imageURL = bronzeImageURL
      break
    case "9" :
    case "10" :
    case "11":
      imageURL = silverImageURL
      break
    case "12" :
    case "13" :
    case "14":
      imageURL = goldImageURL
      break
    case "15":
    case "16":
    case "17":
      imageURL = platinumImageURL
      break
    case "18":
    case "19" :
    case "20":
      imageURL = diamondImageURL
      break
    case "21" :
    case "22" :
    case "23":
      imageURL = crazyImageURL
      break
    default:
      return new ImageResponse(<></>)
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'black',
          backgroundImage: `url(${imageURL})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: "287px",
          marginLeft: "592px",
        }}>
          {/* 画像 */}
          <div style={{
            display: 'flex',
            marginRight: '20px'
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width="100"
              height="100"
              src={avatar || ""}
              style={{
                borderRadius: 128,
              }}
              alt={""}
            />
          </div>

          {/* ユーザー名 */}
          <div style={{
            display: 'flex',
            flexDirection: "column",
            color: "white",
            fontSize: "40px",
            fontWeight: "bold",
          }}>
            <p style={{ margin: '0' }}>
              {username}
            </p>
          </div>
        </div>

        <div style={{
          display: "flex",
          color: "white",
          fontSize: "50px",
          marginTop: "63",
          marginLeft: "710px",
        }}>
          {point}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}