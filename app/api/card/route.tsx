import { ImageResponse } from 'next/server';

export const runtime = 'edge';

const bronzeImageURL = "https://cdn.discordapp.com/attachments/1103240223376293938/1164187695409528995/bronze.jpg?ex=65424d48&is=652fd848&hm=3d680ab25319aeefa3463045a2b20da571ae77a2504212e06f2cd9515c882e32&"
const silverImageURL = "https://cdn.discordapp.com/attachments/1103240223376293938/1164187697213096058/silver.jpg?ex=65424d48&is=652fd848&hm=23efc61d9c501cff11561da82174398ecefbda6dd443cfb7399fed45aca6155e&"
const goldImageURL = "https://cdn.discordapp.com/attachments/1103240223376293938/1164187696512630844/gold.jpg?ex=65424d48&is=652fd848&hm=73209f98fbf026ee3b14feae83b2b9b8ea501306091bbaa2011d43942c87eaf7&"
const platinumImageURL = "https://cdn.discordapp.com/attachments/1103240223376293938/1164187696915296326/platinum.jpg?ex=65424d48&is=652fd848&hm=3876e64eef32f97027801c7f9a240952924b5e8c0e9b874afd809e77d9a63783&"
const diamondImageURL = "https://cdn.discordapp.com/attachments/1103240223376293938/1164187696206463017/diamond.jpg?ex=65424d48&is=652fd848&hm=e55b343ff50a84e9e1ba54fde0e6fb8b32b072f4f5eae2b0125e28ced865f2ac&"
const crazyImageURL = "https://cdn.discordapp.com/attachments/1103240223376293938/1164187695766056980/crazy.jpg?ex=65424d48&is=652fd848&hm=d44df3844f4808328ca957baff5bd36d81fe0e0172cc8a6612edfcf5046a7c27&"

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