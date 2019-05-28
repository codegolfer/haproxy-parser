import React from 'react';

const OutputBlock = (data) => (
    <div>
        <li>
            Log Time : {data.part_00}
        </li>
        <li>
            Hostname : {data.part_01}
        </li>
        <li>
            HA Proxy  : {data.part_02}
        </li>
        <li>
            Client IP Address : {data.part_03}
        </li>
        <li>
            Ignore : {data.part_04}
        </li>
        <li>
            Ignore : {data.part_05}
        </li>
        <li>
            Ingress time : {data.part_06} {data.part_07}
        </li>
        <li>
            Request type : {data.part_08}
        </li>
        <li>
            Rest endpoint : {data.part_09}
        </li>
        <li>
            http request type : {data.part_10}
        </li>
        <li>
            HTTP status code : {data.part_11}
        </li>
        <li>
            Http bytes : {data.part_12}
        </li>
        <li>
            Http time take : {data.part_13}
        </li>
        <li>
            http some number : {data.part_14}
        </li>
        <li>
            ssl info : {data.part_15}
        </li>
        <li>
            ssl port info : {data.part_16}
        </li>
        <li>
            some ip address : {data.part_17}
        </li>
        <li>
            Tq : {data.part_18}
        </li>
        <li>
            Tw : {data.part_19}
        </li>
        <li>
            Tc : {data.part_20}
        </li>
        <li>
            Tr : {data.part_21}
        </li>
        <li>
            Tt : {data.part_21}
        </li>
        <li>
            tsc : {data.part_22}
        </li>
        <li>
            ac : {data.part_23}
        </li>
        <li>
            fc : {data.part_24}
        </li>
        <li>
            bc : {data.part_25}
        </li>
        <li>
            sc : {data.part_26}
        </li>
        <li>
            rc : {data.part_27}
        </li>
        <li>
            sq : {data.part_28}
        </li>
        <li>
            bq : {data.part_29}
        </li>
        <li>
            CC : {data.part_30}
        </li>
        <li>
            CS : {data.part_31}
        </li>
        <li>
            hrl : {data.part_32}
        </li>
        <li>
            trackingid : {data.part_33}
        </li>
        <li>
            host name : {data.part_34}
        </li>
        <li>
            Service : {data.part_35} {data.part_36}
        </li>
        <li>
            Ignore : {data.part_37}
        </li>
        <li>
            sslv : {data.part_38}
        </li>
    </div>
);

export default OutputBlock;