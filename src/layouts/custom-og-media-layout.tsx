import type {RenderFunctionInput} from "astro-opengraph-images";


export async function customOgMediaLayout({title}: RenderFunctionInput): Promise<React.ReactNode> {
    const twj = (await import("tw-to-css")).twj;

    return (
        <div
            style={{
                ...twj("h-full w-full flex items-start justify-start"),
                ...{
                    backgroundImage: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
                },
            }}
        >
            <div style={twj("flex items-start justify-start h-full")}>
                <div style={twj("flex flex-col justify-between w-full h-full p-20")}>
                    <svg width="192" height="31" xmlns="http://www.w3.org/2000/svg" y="0px" viewBox="0 0 563 91">
                        <path fill="FFFFFF" d="M148.94029,19.56114h14.63965c12.35938,0,17.45898,6.05957,17.45898,15.11963
			c0,9.35938-5.69922,14.99902-17.45898,14.99902h-6.05957v13.07959h-8.58008V19.56114z M163.70006,42.0001
			c6.05957,0,8.51953-2.75977,8.51953-7.31933c0-4.32031-2.45996-7.43994-8.51953-7.43994h-6.17969V42.0001H163.70006z"/>
                        <path fill="FFFFFF" d="M189.02037,43.2003c0-4.08008-0.66016-4.85986-2.21973-4.85986c-0.41992,0-0.83984,0.06006-1.25977,0.12012
			v-5.87988c1.19922-0.47998,2.93945-0.83984,4.37891-0.83984c3.60059,0,5.7002,1.67969,6.06055,5.21973h0.35938
			c1.67969-2.93994,5.51953-5.15967,9.89941-5.15967v9.71922c-6.17969,0-8.5791,2.76025-8.5791,7.73975l-0.06055,13.49951h-8.5791
			V43.2003z"/>
                        <path fill="FFFFFF" d="M210.01939,47.69981c0-9.83936,6.41992-15.95898,16.55957-15.95898
			c10.08008,0,16.49902,6.11962,16.49902,15.95898c0,9.65967-6.29883,15.95947-16.49902,15.95947
			C216.37975,63.65928,210.01939,57.35948,210.01939,47.69981z M234.25865,47.69981c0-5.15967-3.05957-8.2793-7.7998-8.2793
			c-4.55957,0-7.61914,3.11963-7.61914,8.2793c0,5.27979,3.2998,8.27979,7.73926,8.27979
			C231.19908,55.9796,234.25865,52.9796,234.25865,47.69981z"/>
                        <path fill="FFFFFF" d="M248.17955,47.87999c0-9.53955,5.81934-16.13915,14.51955-16.13915
			c3.23926,0,6.47949,1.31982,7.91895,2.93994h0.36035V17.46104h8.58008v34.73877c0,4.07959,0.65918,4.85986,2.21973,4.85986
			c0.41992,0,0.83984-0.06006,1.25977-0.12012v5.87988c-1.2002,0.47998-2.93945,0.83984-4.37988,0.83984
			c-3.59961,0-5.69922-1.62012-6.05957-4.67969h-0.41992c-1.67969,3.11963-5.45996,4.73975-10.01953,4.73975
			C253.69908,63.71934,248.17955,57.17979,248.17955,47.87999z M271.51843,47.75987c0-5.27979-2.75977-8.45947-7.25977-8.45947
			c-4.2002,0-7.25977,3.17969-7.25977,8.45947c0,5.16016,3,8.45996,7.31934,8.45996
			C268.93835,56.21983,271.51843,52.92002,271.51843,47.75987z"/>
                        <path fill="FFFFFF" d="M289.45789,48.54014V32.64073h8.58008v15.17918c0,4.37988,1.43945,8.03955,5.87988,8.03955
			c4.25977,0,6.89941-2.93945,6.89941-7.91943l0.05957-15.29931h8.58008v19.55907c0,4.07959,0.66016,4.85986,2.21973,4.85986
			c0.41992,0,0.83984-0.06006,1.25977-0.12012v5.87988c-1.19922,0.47998-2.93945,0.83984-4.37988,0.83984
			c-3.59961,0-5.69922-1.67969-6.05957-5.21973h-0.35938c-1.68066,2.93994-5.52051,5.15967-9.89941,5.15967
			C294.31824,63.59922,289.45789,58.79942,289.45789,48.54014z"/>
                        <path fill="FFFFFF" d="M327.8573,47.69981c0-9.83936,6.41992-15.95898,16.55957-15.95898
			c0.90039,0.06006,5.82031,0.11963,9.59961,2.63965v8.0996c-3.54004-2.33984-7.13965-2.93994-9.71973-2.93994
			c-4.55957,0-7.61914,3-7.61914,8.15967c0,5.27979,3.2998,8.15967,7.73926,8.15967c2.94043,0,6.59961-1.01953,9.12012-2.81982
			v8.09961c-2.75977,1.97998-7.74023,2.52002-9.12012,2.52002C334.21765,63.65928,327.8573,57.35948,327.8573,47.69981z"/>
                        <path fill="FFFFFF" d="M379.21667,56.03965v6.65967c-1.2002,0.47998-4.14062,0.95996-5.58008,0.95996
			c-3.59961,0-10.67969-0.95996-10.67969-10.85938V40.08018h-3.35938v-7.4995h3.7793c0.54004-3.2998,1.44043-5.87988,1.7998-6.8999
			h6.36035v6.8999h6.89941v7.4995h-6.89941v11.51953c0,4.67969,2.45996,4.73975,4.85938,4.73975
			C376.81628,56.33946,378.79675,56.09971,379.21667,56.03965z"/>
                        <path fill="FFFFFF" d="M384.8573,59.75938v-8.33936c4.62012,2.99951,10.73926,4.49951,15.11914,4.49951
			c5.40039,0,7.85938-2.03955,7.85938-5.21973c0-4.61963-5.81934-4.97998-11.63867-6.77979
			c-5.87988-1.7998-11.16016-4.97949-11.16016-12.95947c0-7.97949,6.12012-12.29932,15.17969-12.29932
			c5.45996,0,10.13965,1.13965,14.03906,3.35986v8.15967c-3.59961-2.58008-8.5791-3.83984-12.71875-3.83984
			c-5.52051,0-7.67969,1.56006-7.67969,4.5c0,3.53955,2.99902,4.55957,6.7793,5.69971
			c6.83984,1.97997,16.01953,3.95947,16.01953,13.73926c0,8.69971-6.24023,13.31934-15.95996,13.31934
			C395.89636,63.59922,389.47742,62.33946,384.8573,59.75938z"/>
                        <path fill="FFFFFF" d="M425.05746,43.2003c0-4.08008-0.66016-4.85986-2.21973-4.85986c-0.41992,0-0.83981,0.06006-1.25974,0.12012
			v-5.87988c1.19919-0.47998,2.93942-0.83984,4.37888-0.83984c3.60059,0,5.7002,1.61963,6.06055,4.67969h0.41992
			c1.67969-3.12012,5.45898-4.73975,10.01953-4.73975c8.45898,0,13.97949,6.53954,13.97949,15.83936
			c0,9.53955-5.82031,16.13916-14.51953,16.13916c-3.24023,0-6.47949-1.31982-7.91992-2.93994h-0.36035V75.6588h-8.5791V43.2003z
			 M447.61606,47.63975c0-5.15967-2.99902-8.45947-7.31934-8.45947c-4.62012,0-7.19922,3.2998-7.19922,8.45947
			c0,5.28027,2.75977,8.45996,7.25879,8.45996C444.55649,56.09971,447.61606,52.92002,447.61606,47.63975z"/>
                        <path fill="FFFFFF" d="M461.59653,47.87999c0-9.53955,5.81934-16.13915,14.51953-16.13915c4.37988,0,7.85938,1.97998,9.53906,4.7998
			h0.36035c0.35938-1.26025,0.89941-2.45996,1.43945-3.95996h5.52051v19.61913c0,4.07959,0.65918,4.85986,2.21973,4.85986
			c0.41992,0,0.83984-0.06006,1.25977-0.12012v5.87988c-1.2002,0.47998-2.93945,0.83984-4.37988,0.83984
			c-3.59961,0-5.7002-1.62012-6.05957-4.67969h-0.41992c-1.67969,3.11963-5.45996,4.73975-10.01953,4.73975
			C467.11606,63.71934,461.59653,57.17979,461.59653,47.87999z M484.99496,47.75987c0-5.27979-2.81934-8.45947-7.31934-8.45947
			c-4.2002,0-7.25977,3.17969-7.25977,8.45947c0,5.16016,3,8.45996,7.32031,8.45996
			C482.35532,56.21983,484.99496,52.92002,484.99496,47.75987z"/>
                        <path fill="FFFFFF" d="M501.37485,47.69981c0-9.83936,6.41992-15.95898,16.55954-15.95898
			c0.90039,0.06006,5.82031,0.11963,9.59961,2.63965v8.0996c-3.54004-2.33984-7.13965-2.93994-9.71973-2.93994
			c-4.55957,0-7.61911,3-7.61911,8.15967c0,5.27979,3.29977,8.15967,7.73923,8.15967c2.94043,0,6.59961-1.01953,9.12012-2.81982
			v8.09961c-2.75977,1.97998-7.74023,2.52002-9.12012,2.52002C507.7352,63.65928,501.37485,57.35948,501.37485,47.69981z"/>
                        <path fill="FFFFFF" d="M532.87482,47.52012c0-9.47998,6.35938-15.83935,15.35938-15.83935
			c9.17969,0,14.2793,5.93945,14.2793,14.15917c0,2.22021-0.24023,3.77979-0.41992,4.7998H541.7547
			c0,2.28027,2.15918,5.87988,8.93945,5.87988c2.58008,0,6.59961-0.35986,10.01953-1.62012v6.71973
			c-3.54004,1.43994-6.47949,2.1001-10.62012,2.1001C538.7547,63.71934,532.87482,57.17979,532.87482,47.52012z M553.75372,44.81993
			c0.06055-0.23975,0.06055-0.65967,0.06055-0.8999c0-2.51953-1.56055-5.03955-5.75977-5.03955
			c-3.54004,0-6.36035,2.57959-6.36035,5.93945H553.75372z"/>
                        <path fill="FFFFFF" d="M104.77185,27.47643l-0.00098,0.00262c-15.05164-4.18317-35.88416,2.521-54.39038,11.15021
		c-0.82092,0.38281-1.63464,0.76819-2.44592,1.15784c-0.20264,0.1109-0.40869,0.21509-0.61694,0.31226
		c-4.84253,2.25812-11.14062,0.82819-13.2539-3.92461c-2.12988-4.5672,0.32141-10.21643,5.46484-12.61487
		c0.84912-0.41632,1.70569-0.82593,2.5636-1.22595c13.7782-6.42487,28.35486-10.73993,39.84265-11.8186
		c9.15601-0.77399,19.61133,4.47351,24.55798,10.5766c0.24524,0.30273,0.73523,0.0531,0.62097-0.3194
		c-2.99988-9.78271-15.65894-15.45294-27.41565-14.69794c-0.14343,0.01477-0.29431,0.03302-0.44446,0.0509
		C79.2207,6.10517,79.19604,6.081,79.16138,6.0614C54.27612-8.92298,21.05177,6.17297,13.92554,31.64373
		c-14.3645,12.71198-19.76501,27.94621-2.10229,32.37873c13.92627,2.51257,28.98363-1.0185,47.50171-9.25782
		c0.18042-0.086,0.36133-0.1712,0.54199-0.25543c2.38831-1.11371,4.79419-2.08667,7.20728-3.20538
		c0.2019-0.11047,0.40771-0.21454,0.61548-0.3114c4.84082-2.25739,11.14392-0.83032,13.25537,3.92346
		c2.12988,4.56726-0.32141,10.21643-5.46484,12.61487c-0.8584,0.4212-1.7229,0.83459-2.59033,1.23914
		c-13.0481,6.08441-26.59839,10.69452-37.63244,11.61334c-0.00696-0.00714-0.08179-0.00372-0.08179-0.00372
		c-12.73474,0.44733-21.52478-4.16168-26.7301-10.58392c-0.24536-0.30273-0.73535-0.05316-0.62109,0.3194
		c2.96777,9.67816,14.66687,15.72119,27.75488,15.16992c7.90722,4.62659,17.67773,6.22864,26.81799,5.3866
		c17.60071-1.36731,33.84167-14.69965,38.64734-31.19007C114.64648,47.15013,120.9469,32.98857,104.77185,27.47643z
		 M102.42017,51.33036c0.20605-4.08209-0.29883-8.25922-1.68372-12.4201c-0.20789-0.67383-1.28308-0.49414-1.27722,0.20117
		c-0.5,11.83319-3.0957,23.08685-10.60376,32.09784C78.30103,84.24016,59.84058,89.18913,44.08594,84.12486
		c10.03345-2.07208,20.29419-6.08167,30.83594-10.99744c0.88306-0.41174,1.7699-0.83582,2.63672-1.2608
		c3.53259-1.66046,6.29883-4.47058,7.79297-7.91791c1.58154-3.64893,1.57056-7.56207-0.03027-11.02454
		c-1.40454-3.13226-4.03882-5.55365-7.42212-6.82043c-3.91357-1.46527-8.37549-1.27167-12.24146,0.53107
		c-0.24756,0.11542-0.49402,0.23834-0.73511,0.3667c-1.08667,0.5014-2.1665,0.97083-3.30737,1.46674
		c-1.23169,0.53528-2.50537,1.08887-3.78027,1.68335c-0.1731,0.08075-0.34668,0.16241-0.51978,0.24469
		c-18.66968,8.30017-32.39941,11.05585-44.47643,8.9234c-4.21326-1.0835-6.62952-2.79132-7.18323-5.07745
		c-0.92163-3.80542,2.3103-9.3468,6.78687-14.35345c0,0,0.07593-0.10388,0.16162-0.21033
		c-0.18799,3.45654,0.08789,7.04449,0.91309,10.7287c0.28113,1.08075,1.99146,0.90491,2.04907-0.21326
		c0.33191-3.7475,0.83374-7.53784,1.70288-11.17847c0.63721-3.0667,1.74512-6.27984,2.93579-9.17492
		c8.2439-19.40399,31.7058-28.99628,51.21606-22.2691c-10.58228,2.68744-20.83179,5.49518-31.36072,10.40491
		c-0.87415,0.40765-1.75208,0.82727-2.60973,1.24762c-3.53271,1.6604-6.29907,4.47058-7.79333,7.91803
		c-1.58167,3.64935-1.57043,7.56305,0.03101,11.0258c1.40613,3.13342,4.04211,5.55505,7.42664,6.82141
		c3.91138,1.46356,8.37083,1.26953,12.23486-0.53223c0.2594-0.12103,0.51807-0.25043,0.77039-0.38556
		c0.75818-0.36377,1.51917-0.72394,2.29248-1.08459c21.97656-10.24743,39.60022-14.0155,50.97717-10.90112
		c3.60767,1.2594,5.65381,2.95325,6.08215,5.03595c0.67456,3.2793-1.94153,8.46014-6.86951,13.98985
		C102.54578,51.17625,102.48413,51.25077,102.42017,51.33036z"/>
                    </svg>

                    <h1 style={twj("text-[60px] text-white font-bold text-left")}>{title}</h1>
                </div>
            </div>
        </div>
    )
        ;
}