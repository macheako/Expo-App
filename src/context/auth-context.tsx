import * as React from 'react';
import { LaneInformation } from '@types/lane-info';

// Ref: https://github.com/crunchytech/UBAI_MobileContest_Matt/blob/master/docs/software-design.md#response-2
//
const SessionContext = React.createContext<{
           url?: string|null;
            id?: string|null;
        expire?: number;
      location?: string|null;
          lane?: string|null;
    background?: string|null;
     animation?: string|null;
backgroundList?: (string|null)[];
 animationList?: (string|null)[];
     timestamp?: number|null;

                    start: (id:string|null, expire:number) => void;
    updateLaneInformation: (lane:LaneInformation|null) => void;
                   setUrl: (url:string|null) => void;
}>({
    url: null,
    id: null,
    expire: -1,
    location: null,
    lane: null,
    background: null,
    animation: null,
    backgroundList: [],
    animationList: [],
    timestamp: null,
    
    start: () => null,
    updateLaneInformation: () => null,
    setUrl: () => null,
});

export function useSession() {
    const value = React.use(SessionContext);
    if(!value)
        throw new Error('useSession must be wrapped in a <SessionProvider />');

    return value;
}

export function SessionProvider({ children }: React.PropsWithChildren) {
    const [url, setUrl]                 = React.useState<string|null>(null);
    const [id, setId]                   = React.useState<string|null>(null);
    const [expire, setExpire]           = React.useState<number>(-1);
    const [location, setLocation]       = React.useState<string|null>(null);
    const [lane, setLane]               = React.useState<string|null>(null);
    const [background, setBackground]   = React.useState<string|null>(null);
    const [animation, setAnimation]     = React.useState<string|null>(null);
    const [backgrounds, setBackgrounds] = React.useState<(string|null)[]>([]);
    const [animations, setAnimations]   = React.useState<(string|null)[]>([]);
    const [timestamp, setTimestamp]     = React.useState<number|null>(null);

    const setLaneProperties = (lane:LaneInformation|null) => {
        if (lane?.expire !== undefined)
        {
            setExpire(lane.expire ?? -1);
            setTimestamp(Date.now());
        }

        if (lane?.location !== undefined)
            setLocation(lane.location);

        if (lane?.site_label !== undefined)
            setLane(lane.site_label);

        if (lane?.background !== undefined)
            setBackground(lane.background);

        if (lane?.animation !== undefined)
            setAnimation(lane.animation);

        if (lane?.backgrounds_arr !== undefined)
            setBackgrounds(lane.backgrounds_arr);

        if (lane?.animations_arr !== undefined)
            setAnimations(lane.animations_arr);
    };

    return (
        <SessionContext.Provider
            value={{
                url,
                id,
                expire,
                location,
                lane,
                background,
                animation,
                backgroundList: backgrounds,
                animationList: animations,
                timestamp,

                start: (id:string|null, expire:number) => {
                    setId(id);
                    setExpire(expire);
                    setLocation(null);
                    setLane(null);
                    setBackground(null);
                    setBackgrounds([]);
                    setAnimation(null);
                    setAnimations([]);
                },
                updateLaneInformation: setLaneProperties,
                setUrl
            }}>
            {children}
        </SessionContext.Provider>
    );
}