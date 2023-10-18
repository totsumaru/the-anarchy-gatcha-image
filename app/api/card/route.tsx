import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');
  const avatar = searchParams.get('avatar');
  const point = searchParams.get('point');

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          fontSize: 60,
          color: 'black',
          backgroundImage: `url(https://cdn.discordapp.com/attachments/984614055681613867/1164171311271120997/bronze-min.jpg?ex=65423e05&is=652fc905&hm=0f73efe62e28255a0c219ea96f8f6359fe5c1614efb6c0ef7d6dba7b5a311c0e&)`,
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