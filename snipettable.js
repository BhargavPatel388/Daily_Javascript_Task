{
                                targets: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
                                render: function (data, type, row, meta) {
                                    if (vm.props.filter.modelTypeId == 4 && vm.props.filter.tipoRelatorioAvaId == 3) {
                                        if (meta.col == 9) {
                                            return data;
                                        }
                                        else if (meta.col == 16) {
                                            return data;
                                        }
                                        var fichas = '';
                                        switch (meta.col) {
                                            case 3: fichas = row.JANID
                                                break;
                                            case 4: fichas = row.FEVID
                                                break;
                                            case 5: fichas = row.MARID
                                                break;
                                            case 6: fichas = row.ABRID
                                                break;
                                            case 7: fichas = row.MAIID
                                                break;
                                            case 8: fichas = row.JUNID
                                                break;
                                            case 10: fichas = row.JULID
                                                break;
                                            case 11: fichas = row.AGOID
                                                break;
                                            case 12: fichas = row.SETID
                                                break;
                                            case 13: fichas = row.OUTID
                                                break;
                                            case 14: fichas = row.NOVID
                                                break;
                                            case 15: fichas = row.DEZID
                                                break;
                                        }
                                    }
                                    else if (vm.props.filter.modelTypeId == 4 && vm.props.filter.tipoRelatorioAvaId == 4) {
                                        var fichas = '';
                                        if (meta.col == 6) {
                                            return data;
                                        }
                                        else if (meta.col == 10) {
                                            return data;
                                        }
                                        else if (meta.col == 14) {
                                            return data;
                                        }
                                        else if (meta.col == 18) {
                                            return data;
                                        }
                                        switch (meta.col) {
                                            case 3: fichas = row.JANID
                                                break;
                                            case 4: fichas = row.FEVID
                                                break;
                                            case 5: fichas = row.MARID
                                                break;
                                            case 7: fichas = row.ABRID
                                                break;
                                            case 8: fichas = row.MAIID
                                                break;
                                            case 9: fichas = row.JUNID
                                                break;
                                            case 11: fichas = row.JULID
                                                break;
                                            case 12: fichas = row.AGOID
                                                break;
                                            case 13: fichas = row.SETID
                                                break;
                                            case 15: fichas = row.OUTID
                                                break;
                                            case 16: fichas = row.NOVID
                                                break;
                                            case 17: fichas = row.DEZID
                                                break;
                                        }
                                    }
                                    if (vm.props.filter.modelTypeId == 4) {
                                    var mediaS1 = row.PrimeiraMediaSemestral;
                                    var mediaS2 = row.SegundaMediaSemestral;
 
                                    var mediaT1 = row.PrimeiraMediaTrimestral;
                                    var mediaT2 = row.SegundaMediaTrimestral;
                                    var mediaT3 = row.TerceiraMediaTrimestral;
                                    var mediaT4 = row.QuartaMediaTrimestral;
                                    }
                                    if (vm.props.filter.modelTypeId == 4 && vm.props.filter.tipoRelatorioAvaId == 3) {
                                        if (mediaS1 != undefined && parseFloat(data.replace(",", ".")) < parseFloat(mediaS1.replace(",", "."))) {
                                            data = '<a onclick="abrirModal([' + fichas.toString() + '])" data-toggle="tooltip" data-placement="top" style="color:#f00"; title="Abrir Avaliação">' + data + '</a>';
                                        }
                                        else if (mediaS2 != undefined && parseFloat(data.replace(",", ".")) < parseFloat(mediaS2.replace(",", "."))) {
                                            data = '<a onclick="abrirModal([' + fichas.toString() + '])" data-toggle="tooltip" data-placement="top"  title="Abrir Avaliação">' + data + '</a>';
                                        }
                                    }
                                    else if (vm.props.filter.modelTypeId == 4 && vm.props.filter.tipoRelatorioAvaId == 4) {
                                        if (mediaT1 != undefined && parseFloat(data.replace(",", ".")) < parseFloat(mediaT1.replace(",", "."))) {
                                            data = '<a onclick="abrirModal([' + fichas.toString() + '])" data-toggle="tooltip" data-placement="top" style="color:#f00"; title="Abrir Avaliação">' + data + '</a>';
                                        }
                                        else if (mediaT2 != undefined && parseFloat(data.replace(",", ".")) < parseFloat(mediaT2.replace(",", "."))) {
                                            data = '<a onclick="abrirModal([' + fichas.toString() + '])" data-toggle="tooltip" data-placement="top" style="color:#f00"; title="Abrir Avaliação">' + data + '</a>';
                                        }
                                        else if (mediaT3 != undefined && parseFloat(data.replace(",", ".")) < parseFloat(mediaT3.replace(",", "."))) {
                                            data = '<a onclick="abrirModal([' + fichas.toString() + '])" data-toggle="tooltip" data-placement="top" style="color:#f00"; title="Abrir Avaliação">' + data + '</a>';
                                        }
                                        else if (mediaT4 != undefined && parseFloat(data.replace(",", ".")) < parseFloat(mediaT4.replace(",", "."))) {
                                            data = '<a onclick="abrirModal([' + fichas.toString() + '])" data-toggle="tooltip" data-placement="top"  title="Abrir Avaliação">' + data + '</a>';
                                        }
                                    }
                                    return data;
                                }
                            }