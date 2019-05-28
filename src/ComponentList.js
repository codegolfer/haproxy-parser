import React, { Component } from 'react';
import InputBlock from './InputBlock';
import OutputBlock from './OutputBlock';
import ReferenceBlock from './ReferenceBlock';

class ComponentList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.processInput = this.processInput.bind(this);
    }

    processInput(val) {
        // console.log("adding todo from todo list component", val);
        var res = val.split(' ');
        console.log("Split log", res);

        this.setState(
            {
                part_00: res[0],
                part_01: res[1],
                part_02: res[2],
                part_03: res[3],
                part_04: res[4],
                part_05: res[5],
                part_06: res[6],
                part_07: res[7],
                part_08: res[8],
                part_09: res[9],
                part_10: res[10],
                part_11: res[11],
                part_12: res[12],
                part_13: res[13],
                part_14: res[14],
                part_15: res[15],
                part_16: res[16],
                part_17: res[17],
                part_18: res[18],
                part_19: res[19],
                part_20: res[20],
                part_21: res[21],
                part_22: res[22],
                part_23: res[23],
                part_24: res[24],
                part_25: res[25],
                part_26: res[26],
                part_27: res[27],
                part_28: res[28],
                part_29: res[29],
                part_30: res[30],
                part_31: res[31],
                part_32: res[32],
                part_33: res[33],
                part_34: res[34],
                part_35: res[35],
                part_36: res[36],
                part_37: res[37],
                part_38: res[38]
            }
        )
    }

    render() {
        return (

            <div>
                <h1>WxTeams Access Log Parser</h1>
                <InputBlock processInput={this.processInput} ></InputBlock>
                <OutputBlock {...this.state} ></OutputBlock>
                <ReferenceBlock />
            </div>
        );
    }
}

// 2019-05-28T03:34:25.898785+00:00 localhost haproxy[10812]: 18.221.216.175 - - [28/May/2019:03:34:23 +0000] "GET /wdm/api/v1/devices/c30b5564-e974-4b55-ad13-aa44b033e353 HTTP/1.1" 200 2086 61209 563 "443_public_ssl_in~" "public-443" "127.0.0.1" \2323 0 0 11 2335 ---- 1713 1713 0 1 0 0 0 "" "" "CLIENT-libwx2_564b4a1e-e874-43b9-aa20-e1f9f9d21a01_34823" "wdm-a.wbx2.com" "XAPI Service" "" "TLSv1.2"\

export default ComponentList;