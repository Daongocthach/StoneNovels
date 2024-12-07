export const metadata = {
    title: 'Quên mật khẩu',
    description: 'Trang quên mật khẩu',
}

import Link from 'next/link'

export default function Page() {
    return (
        <section className="relative">
            {/* <div style={{ width: 1440, height: 900, position: 'relative', background: '#F4F5F7' }}>
                <div style={{ width: 300, height: 900, left: 0, top: 0, position: 'absolute' }}>
                    <div style={{ width: 300, height: 900, left: 0, top: 0, position: 'absolute', background: 'white' }} />
                    <div style={{ left: 40, top: 40, position: 'absolute' }}>
                        <div style={{ width: 30, height: 30, left: 0, top: 4, position: 'absolute', background: '#30D354' }}></div>
                        <div style={{ left: 45, top: 0, position: 'absolute', color: '#2C2745', fontSize: 25, fontFamily: 'Poppins', fontWeight: '600', wordWrap: 'break-word' }}>Tennis</div>
                    </div>
                    <div style={{ left: 40, top: 138, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 45, display: 'inline-flex' }}>
                        <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                            <div style={{ width: 20, height: 20, paddingTop: 1.67, paddingBottom: 2.50, paddingLeft: 2.50, paddingRight: 1.67, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <div style={{ width: 15.83, height: 15.83, background: '#B9C0DE' }}></div>
                            </div>
                            <div style={{ color: '#B9C0DE', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 1, wordWrap: 'break-word' }}>All games</div>
                        </div>
                        <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                            <div style={{ width: 20, height: 20, paddingTop: 5, paddingBottom: 5.40, paddingLeft: 0.83, paddingRight: 1.67, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <div style={{ flex: '1 1 0', alignSelf: 'stretch', position: 'relative' }}>
                                    <div style={{ width: 3.33, height: 3.33, left: 7.08, top: 3.77, position: 'absolute', background: '#B9C0DE' }}></div>
                                    <div style={{ width: 5.45, height: 9.60, left: 12.05, top: 0, position: 'absolute' }}>
                                        <div style={{ width: 2.12, height: 6.68, left: 0, top: 1.67, position: 'absolute', background: '#B9C0DE' }}></div>
                                        <div style={{ width: 2.76, height: 9.60, left: 2.69, top: 0, position: 'absolute', background: '#B9C0DE' }}></div>
                                    </div>
                                    <div style={{ width: 5.45, height: 9.60, left: 5.45, top: 0, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0' }}>
                                        <div style={{ width: 2.12, height: 6.68, left: 0, top: 1.67, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', background: '#B9C0DE' }}></div>
                                        <div style={{ width: 2.76, height: 9.60, left: -2.69, top: 0, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', background: '#B9C0DE' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ color: '#B9C0DE', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 1, wordWrap: 'break-word' }}>Live Games</div>
                            <div style={{ width: 30, height: 15, position: 'relative' }}>
                                <div style={{ width: 30, height: 15, left: 0, top: 0, position: 'absolute', background: '#FF1010', borderRadius: 5 }} />
                                <div style={{ left: 6, top: 2, position: 'absolute', color: 'white', fontSize: 8, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.50, wordWrap: 'break-word' }}>LIVE</div>
                            </div>
                        </div>
                        <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 186, display: 'inline-flex' }}>
                            <div style={{ justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'flex' }}>
                                <div style={{ width: 20, height: 20, paddingTop: 2.50, paddingBottom: 3.33, paddingLeft: 2.50, paddingRight: 1.67, justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                    <div style={{ width: 15.83, height: 14.17, position: 'relative' }}>
                                        <div style={{ width: 2.50, height: 0.83, left: 12.50, top: 0, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', background: '#FF16A2' }}></div>
                                        <div style={{ width: 2.50, height: 0.83, left: 5, top: 0, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', background: '#FF16A2' }}></div>
                                        <div style={{ width: 15.83, height: 12.50, left: 0, top: 1.67, position: 'absolute', background: '#1657FF' }}></div>
                                        <div style={{ width: 3.33, height: 5.83, left: 10, top: 5, position: 'absolute', background: '#FF16A2' }}></div>
                                        <div style={{ width: 4.17, height: 5.83, left: 2.50, top: 5, position: 'absolute', background: '#FF16A2' }}></div>
                                    </div>
                                </div>
                                <div style={{ color: '#1657FF', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 1, wordWrap: 'break-word' }}>Score</div>
                            </div>
                            <div style={{ width: 5, height: 30, background: '#1657FF', boxShadow: '-2px 0px 10px 2px rgba(0, 56.10, 255, 0.15)', borderRadius: 50 }} />
                        </div>
                        <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                            <div style={{ width: 20, height: 20, paddingTop: 1.67, paddingBottom: 2.50, paddingLeft: 2.50, paddingRight: 1.67, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <div style={{ width: 15.83, height: 15.83, position: 'relative' }}>
                                    <div style={{ width: 8.33, height: 8.33, left: 0, top: 0, position: 'absolute', background: '#B9C0DE' }}></div>
                                    <div style={{ width: 6.67, height: 6.67, left: 0, top: 9.17, position: 'absolute', background: '#B9C0DE' }}></div>
                                    <div style={{ width: 6.67, height: 6.67, left: 9.17, top: 0, position: 'absolute', background: '#B9C0DE' }}></div>
                                    <div style={{ width: 8.33, height: 8.33, left: 7.50, top: 7.50, position: 'absolute', background: '#B9C0DE' }}></div>
                                </div>
                            </div>
                            <div style={{ color: '#B9C0DE', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 1, wordWrap: 'break-word' }}>Categories</div>
                        </div>
                        <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                            <div style={{ width: 20, height: 20, paddingTop: 4.17, paddingBottom: 5, paddingLeft: 1.67, paddingRight: 1.67, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <div style={{ flex: '1 1 0', alignSelf: 'stretch', position: 'relative' }}>
                                    <div style={{ width: 10.83, height: 10.83, left: 0, top: 0, position: 'absolute', background: '#B9C0DE' }}></div>
                                    <div style={{ width: 5, height: 8.01, left: 11.67, top: 1.67, position: 'absolute', background: '#B9C0DE' }}></div>
                                </div>
                            </div>
                            <div style={{ color: '#B9C0DE', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 1, wordWrap: 'break-word' }}>Video</div>
                        </div>
                        <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                            <div style={{ width: 20, height: 20, paddingTop: 2.50, paddingBottom: 3.33, paddingLeft: 2.50, paddingRight: 1.67, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <div style={{ width: 15.83, height: 14.17, position: 'relative' }}>
                                    <div style={{ width: 15.83, height: 14.17, left: 0, top: 0, position: 'absolute', background: '#B9C0DE' }}></div>
                                    <div style={{ width: 12.50, height: 12.50, left: 2.50, top: 0, position: 'absolute', background: '#B9C0DE' }}></div>
                                </div>
                            </div>
                            <div style={{ color: '#B9C0DE', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 1, wordWrap: 'break-word' }}>Statistic</div>
                        </div>
                    </div>
                </div>
                <div style={{ width: 400, height: 220, left: 1000, top: 655, position: 'absolute', boxShadow: '0px 15px 40px rgba(222, 222, 222, 0.10)' }}>
                    <div style={{ width: 400, height: 220, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 30 }} />
                    <div style={{ left: 20, top: 20, position: 'absolute', color: '#121212', fontSize: 20, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.50, wordWrap: 'break-word' }}>Latest Scores</div>
                    <div style={{ left: 20, top: 59, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 15, display: 'inline-flex' }}>
                        <div style={{ paddingLeft: 6, paddingRight: 6, paddingTop: 3, paddingBottom: 3, background: '#DCFAF8', borderRadius: 5, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex' }}>
                            <div style={{ color: '#16DBCC', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.50, wordWrap: 'break-word' }}>Singles</div>
                        </div>
                        <div style={{ color: '#BACCFD', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>Doubles</div>
                        <div style={{ color: '#BACCFD', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>Mixed Doubles</div>
                    </div>
                    <div style={{ left: 318, top: 25, position: 'absolute', textAlign: 'right', color: '#276BF0', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.50, wordWrap: 'break-word' }}>View All</div>
                    <div style={{ left: 25, top: 144, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.50, wordWrap: 'break-word' }}>Anindita R. (IDN)</div>
                    <div style={{ left: 25, top: 182, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>Naomi O. (JPN)</div>
                    <div style={{ left: 20, top: 98, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 52, display: 'inline-flex' }}>
                        <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex' }}>
                            <div style={{ width: 20, height: 20, paddingTop: 2.08, paddingBottom: 2.92, paddingLeft: 3.75, paddingRight: 3.75, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <div style={{ flex: '1 1 0', alignSelf: 'stretch', position: 'relative' }}>
                                    <div style={{ width: 7.50, height: 7.50, left: 2.50, top: 0, position: 'absolute', background: '#F44771' }}></div>
                                    <div style={{ width: 12.50, height: 6.67, left: 0, top: 8.33, position: 'absolute', background: '#F44771' }}></div>
                                </div>
                            </div>
                            <div style={{ color: 'black', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>WTA - SINGLES: Australia Open, hard</div>
                        </div>
                        <div style={{ width: 20, height: 20, paddingTop: 2.30, paddingBottom: 3.53, paddingLeft: 2.61, paddingRight: 2.61, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <div style={{ width: 14.77, height: 14.17, background: '#FFA000' }}></div>
                        </div>
                    </div>
                    <div style={{ left: 206, top: 144, position: 'absolute' }}>
                        <div style={{ left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.50, wordWrap: 'break-word' }}>2</div>
                        <div style={{ left: 49, top: 0, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>6</div>
                        <div style={{ left: 98, top: 0, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>6</div>
                    </div>
                    <div style={{ left: 207, top: 182, position: 'absolute' }}>
                        <div style={{ left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.50, wordWrap: 'break-word' }}>0</div>
                        <div style={{ left: 50, top: 0, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>3</div>
                        <div style={{ left: 99, top: 0, position: 'absolute', color: 'black', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>1</div>
                    </div>
                    <div style={{ width: 45, height: 25, left: 335, top: 144, position: 'absolute' }}>
                        <div style={{ width: 45, height: 25, left: 0, top: 0, position: 'absolute', background: '#FFF5D9', borderRadius: 5 }} />
                        <div style={{ left: 8, top: 3, position: 'absolute', color: '#FFBB38', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.50, wordWrap: 'break-word' }}>WIN</div>
                    </div>
                </div>
                <div style={{ left: 331, top: 728, position: 'absolute', color: '#353E6C', fontSize: 20, fontFamily: 'SF Pro Display', fontWeight: '700', letterSpacing: 0.50, wordWrap: 'break-word' }}>Rankings</div>
                <div style={{ left: 331, top: 354, position: 'absolute', color: '#353E6C', fontSize: 20, fontFamily: 'SF Pro Display', fontWeight: '700', letterSpacing: 0.50, wordWrap: 'break-word' }}>Statistic</div>
                <div style={{ width: 24, height: 24, paddingTop: 2, paddingBottom: 3, paddingLeft: 3, paddingRight: 2, left: 1233, top: 54, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ width: 19, height: 19, position: 'relative' }}>
                        <div style={{ width: 16, height: 16, left: 0, top: 0, position: 'absolute', background: '#1657FF' }}></div>
                        <div style={{ width: 5, height: 5, left: 14, top: 14, position: 'absolute', background: '#FF16A2' }}></div>
                    </div>
                </div>
                <div style={{ width: 24, height: 24, paddingTop: 2, paddingBottom: 3, paddingLeft: 4, paddingRight: 3, left: 1321, top: 54, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ width: 17, height: 19, position: 'relative' }}>
                        <div style={{ width: 5, height: 2, left: 6, top: 17, position: 'absolute', background: '#FF16A2' }}></div>
                        <div style={{ width: 1, height: 2, left: 8, top: 0, position: 'absolute', background: '#FF16A2' }}></div>
                        <div style={{ width: 17, height: 15, left: 0, top: 1, position: 'absolute', background: '#1657FF' }}></div>
                    </div>
                </div>
                <div style={{ width: 24, height: 24, paddingTop: 2, paddingBottom: 3, paddingLeft: 2, paddingRight: 3, left: 1277, top: 54, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ width: 19, height: 19, position: 'relative' }}>
                        <div style={{ width: 9, height: 9, left: 5, top: 5, position: 'absolute', background: '#FF16A2' }}></div>
                        <div style={{ width: 19, height: 19, left: 0, top: 0, position: 'absolute', background: '#1657FF' }}></div>
                    </div>
                </div>
                <div style={{ left: 340, top: 52, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 20, display: 'inline-flex' }}>
                    <div style={{ width: 30, height: 30, paddingLeft: 3.12, paddingRight: 3.12, paddingTop: 10.40, paddingBottom: 10.40, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                        <div style={{ width: 23.75, height: 9.20, transform: 'rotate(180deg)', transformOrigin: '0 0', background: '#3C3F88' }}></div>
                    </div>
                    <div style={{ color: '#3C3F88', fontSize: 30, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 1, wordWrap: 'break-word' }}>Live Scores</div>
                </div>
                <div style={{ width: 300, height: 300, left: 330, top: 403, position: 'absolute', boxShadow: '0px 15px 40px rgba(222, 222, 222, 0.10)' }}>
                    <div style={{ width: 300, height: 300, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 30 }} />
                    <div style={{ height: 152, left: 33, top: 108, position: 'absolute' }}>
                        <div style={{ width: 11, height: 152, left: 0, top: 0, position: 'absolute' }}>
                            <div style={{ width: 5, height: 130, left: 3, top: 0, position: 'absolute' }}>
                                <div style={{ width: 3, height: 130, left: 1, top: 0, position: 'absolute', background: '#EFF3FE', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 70, left: 0, top: 60, position: 'absolute', background: 'linear-gradient(180deg, #F44771 0%, #FD29B5 100%)', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 15, left: 0, top: 40, position: 'absolute', background: 'linear-gradient(180deg, #4262FE 0%, #C059FF 100%)', borderRadius: 50 }} />
                            </div>
                            <div style={{ left: 0, top: 140, position: 'absolute', color: '#BACCFD', fontSize: 10, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>01</div>
                        </div>
                        <div style={{ width: 13, height: 152, left: 19, top: 0, position: 'absolute' }}>
                            <div style={{ width: 5, height: 130, left: 4, top: 0, position: 'absolute' }}>
                                <div style={{ width: 3, height: 130, left: 1, top: 0, position: 'absolute', background: '#EFF3FE', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 30, left: 0, top: 100, position: 'absolute', background: 'linear-gradient(180deg, #F44771 0%, #FD29B5 100%)', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 75, left: 0, top: 20, position: 'absolute', background: 'linear-gradient(180deg, #4262FE 0%, #C059FF 100%)', borderRadius: 50 }} />
                            </div>
                            <div style={{ left: 0, top: 140, position: 'absolute', color: '#BACCFD', fontSize: 10, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>02</div>
                        </div>
                        <div style={{ width: 13, height: 152, left: 40, top: 0, position: 'absolute' }}>
                            <div style={{ width: 5, height: 130, left: 4, top: 0, position: 'absolute' }}>
                                <div style={{ width: 3, height: 130, left: 1, top: 0, position: 'absolute', background: '#EFF3FE', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 60, left: 0, top: 70, position: 'absolute', background: 'linear-gradient(180deg, #F44771 0%, #FD29B5 100%)', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 40, left: 0, top: 25, position: 'absolute', background: 'linear-gradient(180deg, #4262FE 0%, #C059FF 100%)', borderRadius: 50 }} />
                            </div>
                            <div style={{ left: 0, top: 140, position: 'absolute', color: '#BACCFD', fontSize: 10, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>03</div>
                        </div>
                        <div style={{ width: 13, height: 152, left: 61, top: 0, position: 'absolute' }}>
                            <div style={{ width: 5, height: 130, left: 4, top: 0, position: 'absolute' }}>
                                <div style={{ width: 3, height: 130, left: 1, top: 0, position: 'absolute', background: '#EFF3FE', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 60, left: 0, top: 70, position: 'absolute', background: 'linear-gradient(180deg, #F44771 0%, #FD29B5 100%)', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 10, left: 0, top: 55, position: 'absolute', background: 'linear-gradient(180deg, #4262FE 0%, #C059FF 100%)', borderRadius: 50 }} />
                            </div>
                            <div style={{ left: 0, top: 140, position: 'absolute', color: '#BACCFD', fontSize: 10, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>04</div>
                        </div>
                        <div style={{ width: 13, height: 152, left: 82, top: 0, position: 'absolute' }}>
                            <div style={{ width: 5, height: 130, left: 4, top: 0, position: 'absolute' }}>
                                <div style={{ width: 3, height: 130, left: 1, top: 0, position: 'absolute', background: '#EFF3FE', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 70, left: 0, top: 60, position: 'absolute', background: 'linear-gradient(180deg, #F44771 0%, #FD29B5 100%)', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 40, left: 0, top: 15, position: 'absolute', background: 'linear-gradient(180deg, #4262FE 0%, #C059FF 100%)', borderRadius: 50 }} />
                            </div>
                            <div style={{ left: 0, top: 140, position: 'absolute', color: '#BACCFD', fontSize: 10, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>05</div>
                        </div>
                        <div style={{ width: 13, height: 152, left: 103, top: 0, position: 'absolute' }}>
                            <div style={{ width: 5, height: 130, left: 4, top: 0, position: 'absolute' }}>
                                <div style={{ width: 3, height: 130, left: 1, top: 0, position: 'absolute', background: '#EFF3FE', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 55, left: 0, top: 75, position: 'absolute', background: 'linear-gradient(180deg, #F44771 0%, #FD29B5 100%)', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 30, left: 0, top: 40, position: 'absolute', background: 'linear-gradient(180deg, #4262FE 0%, #C059FF 100%)', borderRadius: 50 }} />
                            </div>
                            <div style={{ left: 0, top: 140, position: 'absolute', color: '#BACCFD', fontSize: 10, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>06</div>
                        </div>
                        <div style={{ width: 12, height: 152, left: 124, top: 0, position: 'absolute' }}>
                            <div style={{ width: 5, height: 130, left: 4, top: 0, position: 'absolute' }}>
                                <div style={{ width: 3, height: 130, left: 1, top: 0, position: 'absolute', background: '#EFF3FE', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 85, left: 0, top: 45, position: 'absolute', background: 'linear-gradient(180deg, #F44771 0%, #FD29B5 100%)', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 20, left: 0, top: 20, position: 'absolute', background: 'linear-gradient(180deg, #4262FE 0%, #C059FF 100%)', borderRadius: 50 }} />
                            </div>
                            <div style={{ left: 0, top: 140, position: 'absolute', color: '#BACCFD', fontSize: 10, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>07</div>
                        </div>
                        <div style={{ width: 13, height: 152, left: 144, top: 0, position: 'absolute' }}>
                            <div style={{ width: 5, height: 130, left: 4, top: 0, position: 'absolute' }}>
                                <div style={{ width: 3, height: 130, left: 1, top: 0, position: 'absolute', background: '#EFF3FE', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 60, left: 0, top: 70, position: 'absolute', background: 'linear-gradient(180deg, #F44771 0%, #FD29B5 100%)', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 20, left: 0, top: 45, position: 'absolute', background: 'linear-gradient(180deg, #4262FE 0%, #C059FF 100%)', borderRadius: 50 }} />
                            </div>
                            <div style={{ left: 0, top: 140, position: 'absolute', color: '#BACCFD', fontSize: 10, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>08</div>
                        </div>
                        <div style={{ width: 13, height: 152, left: 165, top: 0, position: 'absolute' }}>
                            <div style={{ width: 5, height: 130, left: 4, top: 0, position: 'absolute' }}>
                                <div style={{ width: 3, height: 130, left: 1, top: 0, position: 'absolute', background: '#EFF3FE', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 15, left: 0, top: 115, position: 'absolute', background: 'linear-gradient(180deg, #F44771 0%, #FD29B5 100%)', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 75, left: 0, top: 35, position: 'absolute', background: 'linear-gradient(180deg, #4262FE 0%, #C059FF 100%)', borderRadius: 50 }} />
                            </div>
                            <div style={{ left: 0, top: 140, position: 'absolute', color: '#BACCFD', fontSize: 10, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>09</div>
                        </div>
                        <div style={{ width: 11, height: 152, left: 186, top: 0, position: 'absolute' }}>
                            <div style={{ width: 5, height: 130, left: 3, top: 0, position: 'absolute' }}>
                                <div style={{ width: 3, height: 130, left: 1, top: 0, position: 'absolute', background: '#EFF3FE', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 50, left: 0, top: 80, position: 'absolute', background: 'linear-gradient(180deg, #F44771 0%, #FD29B5 100%)', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 50, left: 0, top: 25, position: 'absolute', background: 'linear-gradient(180deg, #4262FE 0%, #C059FF 100%)', borderRadius: 50 }} />
                            </div>
                            <div style={{ left: 0, top: 140, position: 'absolute', color: '#BACCFD', fontSize: 10, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>10</div>
                        </div>
                        <div style={{ width: 10, height: 152, left: 205, top: 0, position: 'absolute' }}>
                            <div style={{ width: 5, height: 130, left: 2, top: 0, position: 'absolute' }}>
                                <div style={{ width: 3, height: 130, left: 1, top: 0, position: 'absolute', background: '#EFF3FE', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 40, left: 0, top: 90, position: 'absolute', background: 'linear-gradient(180deg, #F44771 0%, #FD29B5 100%)', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 40, left: 0, top: 45, position: 'absolute', background: 'linear-gradient(180deg, #4262FE 0%, #C059FF 100%)', borderRadius: 50 }} />
                            </div>
                            <div style={{ left: 0, top: 140, position: 'absolute', color: '#BACCFD', fontSize: 10, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>11</div>
                        </div>
                        <div style={{ width: 11, height: 152, left: 223, top: 0, position: 'absolute' }}>
                            <div style={{ width: 5, height: 130, left: 3, top: 0, position: 'absolute' }}>
                                <div style={{ width: 3, height: 130, left: 1, top: 0, position: 'absolute', background: '#EFF3FE', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 40, left: 0, top: 90, position: 'absolute', background: 'linear-gradient(180deg, #F44771 0%, #FD29B5 100%)', borderRadius: 50 }} />
                                <div style={{ width: 5, height: 80, left: 0, top: 5, position: 'absolute', background: 'linear-gradient(180deg, #4262FE 0%, #C059FF 100%)', borderRadius: 50 }} />
                            </div>
                            <div style={{ left: 0, top: 140, position: 'absolute', color: '#BACCFD', fontSize: 10, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>12</div>
                        </div>
                    </div>
                    <div style={{ left: 35, top: 48, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 72, display: 'inline-flex' }}>
                        <div style={{ width: 20, height: 20, paddingLeft: 2.08, paddingRight: 2.08, paddingTop: 6.93, paddingBottom: 6.93, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <div style={{ width: 15.83, height: 6.14, transform: 'rotate(180deg)', transformOrigin: '0 0', background: '#121212' }}></div>
                        </div>
                        <div style={{ textAlign: 'center', color: '#121212', fontSize: 20, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.50, wordWrap: 'break-word' }}>2019</div>
                        <div style={{ width: 20, height: 20, paddingLeft: 2.08, paddingRight: 2.08, paddingTop: 6.93, paddingBottom: 6.93, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <div style={{ width: 15.83, height: 6.14, background: '#121212' }}></div>
                        </div>
                    </div>
                </div>
                <div style={{ width: 650, height: 200, left: 330, top: 129, position: 'absolute', boxShadow: '0px 15px 40px rgba(222, 222, 222, 0.10)' }}>
                    <div style={{ width: 650, height: 200, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 30 }} />
                    <div style={{ width: 85, height: 100, left: 205, top: 66, position: 'absolute', background: '#F6D3DC', borderTopLeftRadius: 15, borderTopRightRadius: 5, borderBottomRightRadius: 15, borderBottomLeftRadius: 5 }} />
                    <div style={{ width: 85, height: 100, left: 205, top: 66, position: 'absolute' }}>
                        <div style={{ width: 85, height: 100, left: 0, top: 0, position: 'absolute', background: '#F6D3DC', borderTopLeftRadius: 15, borderTopRightRadius: 5, borderBottomRightRadius: 15, borderBottomLeftRadius: 5 }} />
                        <div style={{ width: 85, height: 100, left: 0, top: 0, position: 'absolute' }}>
                            <div style={{ width: 85, height: 100, left: 0, top: 0, position: 'absolute', background: '#F6D3DC', borderTopLeftRadius: 15, borderTopRightRadius: 5, borderBottomRightRadius: 15, borderBottomLeftRadius: 5 }} />
                            <div style={{ width: 60, height: 90.84, left: 13, top: 13, position: 'absolute' }}>
                                <div style={{ width: 59.28, height: 69.32, left: 0, top: 0, position: 'absolute', background: '#3B2144' }}></div>
                                <div style={{ width: 40.40, height: 57.61, left: 8.84, top: 11.71, position: 'absolute', background: '#280434' }}></div>
                                <div style={{ width: 59.76, height: 35.86, left: 0.24, top: 54.98, position: 'absolute' }}>
                                    <div style={{ width: 59.76, height: 35.86, left: 0, top: 0, position: 'absolute', background: '#B9C4FF' }}></div>
                                    <div style={{ width: 59.76, height: 35.86, left: 0, top: 0, position: 'absolute' }}>
                                        <div style={{ width: 59.76, height: 35.86, left: 0, top: 0, position: 'absolute', background: '#00D355' }}></div>
                                        <div style={{ width: 59.76, height: 35.86, left: 1.43, top: 0, position: 'absolute', background: '#516DFF' }}></div>
                                        <div style={{ width: 59.76, height: 35.86, left: 2.87, top: 0, position: 'absolute', background: 'linear-gradient(21deg, #4457FF 0%, #A6BFFF 100%)' }}></div>
                                        <div style={{ width: 48, height: 22, left: 91.72, top: 124.47, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0', background: 'linear-gradient(92deg, white 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
                                    </div>
                                    <div style={{ width: 1.43, height: 15.06, left: 12.67, top: 21.51, position: 'absolute', background: 'linear-gradient(180deg, rgba(27.59, 35.02, 213.56, 0) 0%, #1C23D6 100%)' }}></div>
                                    <div style={{ width: 1.43, height: 15.06, left: 44.22, top: 21.51, position: 'absolute', background: 'linear-gradient(180deg, rgba(27.59, 35.02, 213.56, 0) 0%, #1C23D6 100%)' }}></div>
                                </div>
                                <div style={{ width: 42.37, height: 50.34, left: 8.46, top: 9.93, position: 'absolute' }}>
                                    <div style={{ width: 11.02, height: 18.35, left: 15.49, top: 31.99, position: 'absolute' }}>
                                        <div style={{ width: 9.70, height: 18.35, left: 0.66, top: 0, position: 'absolute', background: '#FBC6D7' }}></div>
                                        <div style={{ width: 9.70, height: 18.35, left: 0.66, top: 0, position: 'absolute' }}>
                                            <div style={{ width: 9.70, height: 18.35, left: 0, top: 0, position: 'absolute', background: '#FF7CA6' }}></div>
                                            <div style={{ width: 9.19, height: 8.91, left: -0.14, top: 0, position: 'absolute', background: '#FF7CA6' }}></div>
                                        </div>
                                    </div>
                                    <div style={{ width: 42.37, height: 36.71, left: 0, top: 0, position: 'absolute' }}>
                                        <div style={{ width: 5.78, height: 7.35, left: 0, top: 14.33, position: 'absolute', transform: 'rotate(-17.58deg)', transformOrigin: '0 0' }}>
                                            <div style={{ width: 5.77, height: 7.34, left: 0, top: 0, position: 'absolute', transform: 'rotate(-17.56deg)', transformOrigin: '0 0', background: '#FBC6D7' }}></div>
                                            <div style={{ width: 3.99, height: 4.79, left: 1.47, top: 0.90, position: 'absolute', transform: 'rotate(-17.58deg)', transformOrigin: '0 0', background: '#FF7CA6' }}></div>
                                        </div>
                                        <div style={{ width: 5.78, height: 7.35, left: 42.37, top: 15.38, position: 'absolute', transform: 'rotate(-162.42deg)', transformOrigin: '0 0' }}>
                                            <div style={{ width: 5.77, height: 7.34, left: 0, top: 0, position: 'absolute', transform: 'rotate(-162.44deg)', transformOrigin: '0 0', background: '#FBC6D7' }}></div>
                                            <div style={{ width: 3.99, height: 4.79, left: -1.47, top: 0.90, position: 'absolute', transform: 'rotate(-162.42deg)', transformOrigin: '0 0', background: '#FF7CA6' }}></div>
                                        </div>
                                        <div style={{ width: 31.50, height: 36.71, left: 5.25, top: 0, position: 'absolute', background: '#FBC6D7' }}></div>
                                        <div style={{ width: 31.50, height: 36.71, left: 5.25, top: 0, position: 'absolute' }}>
                                            <div style={{ width: 31.50, height: 36.71, left: 0, top: 0, position: 'absolute', background: '#FBC6D7' }}></div>
                                            <div style={{ width: 8.61, height: 8.61, left: 22.86, top: 22.11, position: 'absolute', background: '#FF5E5E' }}></div>
                                            <div style={{ width: 8.61, height: 8.61, left: 0.63, top: 22.11, position: 'absolute', background: '#FF5E5E' }}></div>
                                        </div>
                                        <div style={{ width: 6.22, height: 1.91, left: 18.07, top: 30.23, position: 'absolute', background: '#FF7FA8' }}></div>
                                        <div style={{ width: 16.73, left: 12.58, top: 16.13, position: 'absolute' }}>
                                            <div style={{ width: 2.39, height: 4.30, left: 0, top: 0, position: 'absolute', background: '#3B2144' }}></div>
                                            <div style={{ width: 2.39, height: 4.30, left: 14.34, top: 0, position: 'absolute', background: '#3B2144' }}></div>
                                        </div>
                                        <div style={{ width: 3.71, height: 8.13, left: 19.87, top: 16.97, position: 'absolute', background: '#FF7FA8' }}></div>
                                    </div>
                                    <div style={{ width: 32.03, height: 8.96, left: 5.40, top: 5.25, position: 'absolute' }}>
                                        <div style={{ width: 32.03, height: 8.96, left: 0, top: 0, position: 'absolute', background: 'white' }}></div>
                                        <div style={{ width: 32.03, height: 8.96, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ width: 32.03, height: 8.96, left: 0, top: 0, position: 'absolute', background: 'white' }}></div>
                                            <div style={{ width: 35.55, height: 9.35, left: 5.20, top: 6.71, position: 'absolute', transform: 'rotate(-11.90deg)', transformOrigin: '0 0', background: '#E9E9E9' }}></div>
                                        </div>
                                    </div>
                                    <div style={{ width: 36.81, height: 19.12, left: 2.77, top: -2.28, position: 'absolute', background: '#3B2144' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: 85, height: 100, left: 360, top: 66, position: 'absolute' }}>
                        <div style={{ width: 85, height: 100, left: 0, top: 0, position: 'absolute', background: '#FFE7C2', borderTopLeftRadius: 15, borderTopRightRadius: 5, borderBottomRightRadius: 15, borderBottomLeftRadius: 5 }} />
                        <div style={{ width: 85, height: 100, left: 0, top: 0, position: 'absolute' }}>
                            <div style={{ width: 85, height: 100, left: 0, top: 0, position: 'absolute', background: '#FFE7C2', borderTopLeftRadius: 15, borderTopRightRadius: 5, borderBottomRightRadius: 15, borderBottomLeftRadius: 5 }} />
                            <div style={{ width: 70.25, height: 97.01, left: 13, top: 3, position: 'absolute' }}>
                                <div style={{ width: 55.75, height: 33.45, left: 0, top: 63.56, position: 'absolute' }}>
                                    <div style={{ width: 55.75, height: 33.45, left: 0, top: 0, position: 'absolute', background: '#75FDAB' }}></div>
                                    <div style={{ width: 55.75, height: 33.45, left: 0, top: 0, position: 'absolute' }}>
                                        <div style={{ width: 55.75, height: 33.45, left: 0, top: 0, position: 'absolute', background: '#00D355' }}></div>
                                        <div style={{ width: 55.75, height: 33.45, left: 1.34, top: 0, position: 'absolute', background: '#29D60C' }}></div>
                                        <div style={{ width: 55.75, height: 33.45, left: 2.68, top: 0, position: 'absolute', background: 'linear-gradient(21deg, #00D355 0%, #88FF3F 100%)' }}></div>
                                        <div style={{ width: 48, height: 22, left: 91.72, top: 124.47, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0', background: 'linear-gradient(92deg, white 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
                                    </div>
                                    <div style={{ width: 6, height: 63, left: 53, top: 90, position: 'absolute', background: 'linear-gradient(0deg, #77FF9D 0%, rgba(119, 255, 157.08, 0) 100%)' }}></div>
                                    <div style={{ width: 1.34, height: 14.05, left: 41.26, top: 20.07, position: 'absolute', background: 'linear-gradient(360deg, #77FF9D 0%, rgba(119, 255, 157.08, 0) 100%)' }}></div>
                                </div>
                                <div style={{ width: 63.56, height: 78.72, left: 6.69, top: 0, position: 'absolute' }}>
                                    <div style={{ width: 43.68, height: 68.24, left: 0, top: 14.22, position: 'absolute', transform: 'rotate(-19deg)', transformOrigin: '0 0', background: '#5236FF' }}></div>
                                    <div style={{ width: 32.99, height: 53.89, left: 6.83, top: 23.97, position: 'absolute', transform: 'rotate(-19deg)', transformOrigin: '0 0', background: '#4021FE' }}></div>
                                    <div style={{ width: 35.77, height: 35.51, left: 3.05, top: 12.48, position: 'absolute', background: '#5236FF' }}></div>
                                    <div style={{ width: 39.53, height: 46.97, left: 0.98, top: 21.53, position: 'absolute' }}>
                                        <div style={{ width: 10.29, height: 17.12, left: 14.45, top: 29.84, position: 'absolute' }}>
                                            <div style={{ width: 9.05, height: 17.12, left: 0.62, top: 0, position: 'absolute', background: '#FBC6D7' }}></div>
                                            <div style={{ width: 9.05, height: 17.12, left: 0.62, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 9.05, height: 17.12, left: 0, top: 0, position: 'absolute', background: '#FF7CA6' }}></div>
                                                <div style={{ width: 8.57, height: 8.32, left: -0.13, top: 0, position: 'absolute', background: '#FF7CA6' }}></div>
                                            </div>
                                        </div>
                                        <div style={{ width: 39.53, height: 34.25, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ width: 5.39, height: 6.85, left: 0, top: 13.37, position: 'absolute', transform: 'rotate(-17.58deg)', transformOrigin: '0 0' }}>
                                                <div style={{ width: 5.39, height: 6.85, left: 0, top: 0, position: 'absolute', transform: 'rotate(-17.56deg)', transformOrigin: '0 0', background: '#FBC6D7' }}></div>
                                                <div style={{ width: 3.72, height: 4.47, left: 1.37, top: 0.84, position: 'absolute', transform: 'rotate(-17.58deg)', transformOrigin: '0 0', background: '#FF7CA6' }}></div>
                                            </div>
                                            <div style={{ width: 5.39, height: 6.85, left: 39.53, top: 14.35, position: 'absolute', transform: 'rotate(-162.42deg)', transformOrigin: '0 0' }}>
                                                <div style={{ width: 5.39, height: 6.85, left: 0, top: 0, position: 'absolute', transform: 'rotate(-162.44deg)', transformOrigin: '0 0', background: '#FBC6D7' }}></div>
                                                <div style={{ width: 3.72, height: 4.47, left: -1.37, top: 0.84, position: 'absolute', transform: 'rotate(-162.42deg)', transformOrigin: '0 0', background: '#FF7CA6' }}></div>
                                            </div>
                                            <div style={{ width: 29.39, height: 34.25, left: 4.90, top: 0, position: 'absolute', background: '#FBC6D7' }}></div>
                                            <div style={{ width: 29.39, height: 34.25, left: 4.90, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 29.39, height: 34.25, left: 0, top: 0, position: 'absolute', background: '#FBC6D7' }}></div>
                                                <div style={{ width: 8.03, height: 8.03, left: 21.33, top: 20.62, position: 'absolute', background: '#FF5E5E' }}></div>
                                                <div style={{ width: 8.03, height: 8.03, left: 0.59, top: 20.62, position: 'absolute', background: '#FF5E5E' }}></div>
                                            </div>
                                            <div style={{ width: 5.80, height: 1.78, left: 16.86, top: 28.21, position: 'absolute', background: '#FF7FA8' }}></div>
                                            <div style={{ width: 2.23, height: 4.01, left: 11.73, top: 15.05, position: 'absolute', background: '#361AE7' }}></div>
                                            <div style={{ width: 2.23, height: 4.01, left: 25.11, top: 15.05, position: 'absolute', background: '#361AE7' }}></div>
                                            <div style={{ width: 3.46, height: 7.58, left: 18.53, top: 15.83, position: 'absolute', background: '#FF7FA8' }}></div>
                                        </div>
                                    </div>
                                    <div style={{ width: 29.88, height: 8.36, left: 6.02, top: 26.43, position: 'absolute' }}>
                                        <div style={{ width: 29.88, height: 8.36, left: 0, top: 0, position: 'absolute', background: 'white' }}></div>
                                        <div style={{ width: 29.88, height: 8.36, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ width: 29.88, height: 8.36, left: 0, top: 0, position: 'absolute', background: 'white' }}></div>
                                            <div style={{ width: 33.16, height: 8.72, left: 4.85, top: 6.26, position: 'absolute', transform: 'rotate(-11.90deg)', transformOrigin: '0 0', background: '#E9E9E9' }}></div>
                                        </div>
                                    </div>
                                    <div style={{ width: 29.35, height: 15.36, left: 6.61, top: 19.62, position: 'absolute', background: '#5236FF' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ left: 20, top: 20, position: 'absolute', color: '#353E6C', fontSize: 20, fontFamily: 'SF Pro Display', fontWeight: '700', letterSpacing: 0.50, wordWrap: 'break-word' }}>Your Next Match</div>
                    <div style={{ left: 53, top: 95, position: 'absolute', textAlign: 'right', color: '#121212', fontSize: 25, fontFamily: 'SF Pro Display', fontWeight: '700', letterSpacing: 0.50, wordWrap: 'break-word' }}>Naomi O.</div>
                    <div style={{ left: 53, top: 130, position: 'absolute', color: '#BACCFD', fontSize: 10, fontFamily: 'SF Pro Display', fontWeight: '300', letterSpacing: 0.50, wordWrap: 'break-word' }}>Japan</div>
                    <div style={{ left: 480, top: 95, position: 'absolute', color: '#121212', fontSize: 25, fontFamily: 'SF Pro Display', fontWeight: '700', letterSpacing: 0.50, wordWrap: 'break-word' }}>Anindita R.</div>
                    <div style={{ left: 480, top: 130, position: 'absolute', color: '#BACCFD', fontSize: 10, fontFamily: 'SF Pro Display', fontWeight: '300', letterSpacing: 0.50, wordWrap: 'break-word' }}>Indonesia</div>
                    <div style={{ left: 507, top: 20, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                        <div style={{ textAlign: 'right', color: '#BACCFD', fontSize: 12, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>18 January 2020</div>
                        <div style={{ width: 15, height: 15, paddingTop: 1.88, paddingBottom: 2.50, paddingLeft: 1.88, paddingRight: 1.25, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <div style={{ width: 11.88, height: 10.62, position: 'relative' }}>
                                <div style={{ width: 1.88, height: 0.62, left: 9.38, top: 0, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', background: '#BACCFD' }}></div>
                                <div style={{ width: 1.88, height: 0.62, left: 3.75, top: 0, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', background: '#BACCFD' }}></div>
                                <div style={{ width: 11.88, height: 9.38, left: 0, top: 1.25, position: 'absolute', background: '#BACCFD' }}></div>
                                <div style={{ width: 11.88, height: 0.62, left: 0, top: 3.75, position: 'absolute', background: '#BACCFD' }}></div>
                                <div style={{ width: 1.88, height: 0.62, left: 1.88, top: 5.62, position: 'absolute', background: '#BACCFD' }}></div>
                                <div style={{ width: 1.88, height: 0.62, left: 1.88, top: 8.12, position: 'absolute', background: '#BACCFD' }}></div>
                                <div style={{ width: 1.88, height: 0.62, left: 5, top: 5.62, position: 'absolute', background: '#BACCFD' }}></div>
                                <div style={{ width: 1.88, height: 0.62, left: 5, top: 8.12, position: 'absolute', background: '#BACCFD' }}></div>
                                <div style={{ width: 1.88, height: 0.62, left: 8.12, top: 5.62, position: 'absolute', background: '#BACCFD' }}></div>
                                <div style={{ width: 1.88, height: 0.62, left: 8.12, top: 8.12, position: 'absolute', background: '#BACCFD' }}></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: 35, height: 35, paddingTop: 7.29, paddingBottom: 7.29, left: 307, top: 99, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                        <div style={{ flex: '1 1 0', alignSelf: 'stretch', position: 'relative' }}>
                            <div style={{ width: 5.83, height: 5.83, left: 0, top: 0, position: 'absolute', background: '#1657FF' }}></div>
                            <div style={{ width: 5.83, height: 5.83, left: 0, top: 14.58, position: 'absolute', background: '#1657FF' }}></div>
                        </div>
                    </div>
                </div>
                <div style={{ width: 200, height: 100, left: 330, top: 775, position: 'absolute' }}>
                    <div style={{ width: 200, height: 100, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(0deg, #F44771 0%, #F44771 100%)', borderRadius: 20 }} />
                    <div style={{ width: 200, height: 100, left: 0, top: 0, position: 'absolute' }}>
                        <div style={{ width: 200, height: 100, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(0deg, #F44771 0%, #F44771 100%)', borderRadius: 20 }} />
                        <div style={{ width: 200, height: 100, left: 159.71, top: 0, position: 'absolute', transform: 'rotate(45deg)', transformOrigin: '0 0', background: 'linear-gradient(0deg, #FF7193 0%, #FF7193 100%)', borderRadius: 50 }} />
                        <div style={{ width: 200, height: 100, left: 121, top: -21, position: 'absolute', background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.30) 100%)', borderRadius: 50 }} />
                        <div style={{ width: 200, height: 100, left: 69, top: 49.95, position: 'absolute', transform: 'rotate(-72.70deg)', transformOrigin: '0 0', background: 'linear-gradient(0deg,  0%,  100%)', borderRadius: 50, border: '1px rgba(255, 255, 255, 0.30) solid' }} />
                    </div>
                    <div style={{ left: 15, top: 20, position: 'absolute', color: 'white', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 1, wordWrap: 'break-word' }}>Singles</div>
                    <div style={{ left: 15, top: 53, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 5, display: 'inline-flex' }}>
                        <div style={{ color: 'white', fontSize: 25, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.50, wordWrap: 'break-word' }}>18</div>
                        <div style={{ width: 24, height: 24, paddingTop: 3, paddingBottom: 3.51, paddingLeft: 4, paddingRight: 4.13, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <div style={{ width: 15.87, height: 17.49, background: 'white' }}></div>
                        </div>
                    </div>
                </div>
                <div style={{ width: 250, height: 293, left: 25, top: 582, position: 'absolute' }}>
                    <div style={{ width: 250, height: 293, left: 0, top: 0, position: 'absolute', background: '#EBEEFF', borderRadius: 30 }} />
                    <div style={{ paddingLeft: 86, paddingRight: 86, paddingTop: 18, paddingBottom: 18, left: 10, top: 224, position: 'absolute', background: '#1657FF', borderRadius: 15, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                        <div style={{ color: 'white', fontSize: 15, fontFamily: 'SF UI Display', fontWeight: '500', wordWrap: 'break-word' }}>Upgrade</div>
                    </div>
                    <div style={{ width: 151, left: 50, top: 173, position: 'absolute', textAlign: 'center' }}><span style={{ color: '#1B0031', fontSize: 15, fontFamily: 'SF UI Display', fontWeight: '300', letterSpacing: 1, wordWrap: 'break-word'}}>Upgrade to </span><span style={{ color: '#1C4EFF', fontSize: 15, fontFamily: 'SF UI Display', fontWeight: '700', letterSpacing: 1, wordWrap: 'break-word' }}>PRO</span><span style={{ color: '#1B0031', fontSize: 15, fontFamily: 'SF UI Display', fontWeight: '300', letterSpacing: 1, wordWrap: 'break-word'}}></span></div>
                    <div style={{ width: 215, height: 215, left: 25, top: -48, position: 'absolute' }}>
                        <div style={{ width: 49.02, height: 82.13, left: 76.54, top: 34.40, position: 'absolute', background: 'linear-gradient(293deg, #93B0FF 0%, #5694FF 100%)' }}></div>
                        <div style={{ width: 49.02, height: 82.13, left: 76.54, top: 34.40, position: 'absolute' }}>
                            <div style={{ width: 49.02, height: 82.13, left: 0, top: 0, position: 'absolute', background: '#4D94FF' }}></div>
                            <div style={{ width: 33.11, height: 82.08, left: -2.15, top: -8.55, position: 'absolute', background: 'linear-gradient(4deg, #70B5FF 0%, #ADCCFF 100%)' }}></div>
                        </div>
                        <div style={{ width: 86.43, height: 86.43, left: 58.05, top: 83.85, position: 'absolute', background: 'linear-gradient(176deg, #759CFF 0%, #70BAFF 100%)' }}></div>
                        <div style={{ width: 86.43, height: 86.43, left: 58.05, top: 83.85, position: 'absolute' }}>
                            <div style={{ width: 86.43, height: 86.43, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(180deg, #AAB8FF 0%, #61A0FF 100%)' }}></div>
                            <div style={{ width: 86.43, height: 86.43, left: 1.72, top: -1.29, position: 'absolute', background: '#4383FF' }}></div>
                            <div style={{ width: 86.43, height: 86.43, left: 4.73, top: -2.58, position: 'absolute', background: 'linear-gradient(180deg, #AAB8FF 0%, #61A0FF 100%)' }}></div>
                        </div>
                        <div style={{ width: 24.51, height: 46.87, left: 90.30, top: 103.63, position: 'absolute', background: 'linear-gradient(135deg, #0048FF 0%, #5081FD 100%)' }}></div>
                        <div style={{ width: 60.20, height: 60.20, left: 118.25, top: 120.83, position: 'absolute', background: 'rgba(184.88, 204.51, 255, 0.50)', backdropFilter: 'blur(5px)' }}></div>
                        <div style={{ width: 38.92, height: 37.10, left: 128.89, top: 130.51, position: 'absolute', background: '#4D7FFE' }}></div>
                        <div style={{ width: 7.85, height: 7.52, left: 146.15, top: 62.56, position: 'absolute', background: '#6F6CFF' }}></div>
                        <div style={{ width: 14.39, height: 13.75, left: 56.19, top: 23.35, position: 'absolute', transform: 'rotate(133.35deg)', transformOrigin: '0 0', opacity: 0.80, background: '#6F6CFF' }}></div>
                        <div style={{ width: 11.03, height: 10.55, left: 38.95, top: 160.51, position: 'absolute', transform: 'rotate(73.52deg)', transformOrigin: '0 0', opacity: 0.73, background: '#6F6CFF' }}></div>
                        <div style={{ width: 13.96, height: 13.32, left: 192.24, top: 107.41, position: 'absolute', transform: 'rotate(108.51deg)', transformOrigin: '0 0', opacity: 0.90, background: '#6F6CFF' }}></div>
                        <div style={{ width: 9.11, height: 8.71, left: 17.91, top: 77.80, position: 'absolute', transform: 'rotate(-12.68deg)', transformOrigin: '0 0', opacity: 0.37, background: '#6F6CFF' }}></div>
                        <div style={{ width: 13.96, height: 13.32, left: 53.85, top: 122.56, position: 'absolute', transform: 'rotate(180deg)', transformOrigin: '0 0', opacity: 0.81, background: '#6F6CFF' }}></div>
                        <div style={{ width: 13.96, height: 13.32, left: 127.50, top: 33.30, position: 'absolute', transform: 'rotate(-127.27deg)', transformOrigin: '0 0', opacity: 0.55, background: '#6F6CFF' }}></div>
                        <div style={{ width: 13.96, height: 13.32, left: 132.94, top: 197.44, position: 'absolute', transform: 'rotate(175.44deg)', transformOrigin: '0 0', opacity: 0.39, background: '#6F6CFF' }}></div>
                    </div>
                </div>
                <div style={{ width: 400, height: 505, left: 1000, top: 128, position: 'absolute', boxShadow: '0px 15px 40px rgba(222, 222, 222, 0.10)', borderRadius: 30, overflow: 'hidden' }}>
                    <div style={{ width: 400, height: 505, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 30 }} />
                    <div style={{ width: 400, height: 191.56, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(101deg, #5C24FC 0%, #9D7AFF 100%)' }}></div>
                    <div style={{ height: 476, paddingBottom: 13.23, paddingLeft: 48.97, paddingRight: 48.94, left: 117, top: 10, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
                        <div style={{ width: 259.09, height: 475.59, position: 'relative' }}>
                            <div style={{ width: 252.80, height: 28.24, left: 6.29, top: 445.67, position: 'absolute', background: 'rgba(0, 0, 0, 0.13)' }}></div>
                            <div style={{ width: 98.18, height: 128.33, left: 134.07, top: 0, position: 'absolute', transform: 'rotate(26.23deg)', transformOrigin: '0 0', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                                <div style={{ width: 98.19, height: 128.33, position: 'relative' }}>
                                    <div style={{ width: 9.01, height: 8.05, left: 0, top: 120.28, position: 'absolute', background: '#2B242A' }}></div>
                                    <div style={{ width: 28.15, height: 35.83, left: 0.39, top: 91.26, position: 'absolute', background: '#BC7BFB' }}></div>
                                    <div style={{ width: 18.16, height: 28.72, left: 8.68, top: 97.42, position: 'absolute', mixBlendMode: 'soft-light', background: 'white' }}></div>
                                    <div style={{ width: 28.15, height: 35.82, left: 0.39, top: 91.26, position: 'absolute', mixBlendMode: 'multiply', background: '#BC7BFB' }}></div>
                                    <div style={{ width: 27.82, height: 30.87, left: 0.48, top: 94.78, position: 'absolute', mixBlendMode: 'soft-light' }}>
                                        <div style={{ width: 8.97, height: 1.89, left: 1.24, top: 28.98, position: 'absolute', mixBlendMode: 'soft-light', background: 'white' }}></div>
                                        <div style={{ width: 12.59, height: 2.22, left: 0, top: 24.86, position: 'absolute', mixBlendMode: 'soft-light', background: 'white' }}></div>
                                        <div style={{ width: 11.96, height: 2.16, left: 3.79, top: 19.90, position: 'absolute', mixBlendMode: 'soft-light', background: 'white' }}></div>
                                        <div style={{ width: 11.37, height: 2.09, left: 7.54, top: 14.93, position: 'absolute', mixBlendMode: 'soft-light', background: 'white' }}></div>
                                        <div style={{ width: 10.75, height: 2.01, left: 11.34, top: 9.95, position: 'absolute', mixBlendMode: 'soft-light', background: 'white' }}></div>
                                        <div style={{ width: 10.22, height: 1.94, left: 15.05, top: 5, position: 'absolute', mixBlendMode: 'soft-light', background: 'white' }}></div>
                                        <div style={{ width: 9.06, height: 1.90, left: 18.76, top: -0, position: 'absolute', mixBlendMode: 'soft-light', background: 'white' }}></div>
                                    </div>
                                    <div style={{ width: 45.75, height: 50.20, left: 24.01, top: 43.71, position: 'absolute', background: '#352E35' }}></div>
                                    <div style={{ width: 64.04, height: 51.96, left: 34.14, top: 0, position: 'absolute', background: '#BC7BFB' }}></div>
                                    <div style={{ width: 61.26, height: 66.42, left: 33.36, top: 3.87, position: 'absolute', background: 'linear-gradient(180deg, rgba(255, 255, 150.88, 0.95) 0%, white 46%, rgba(255, 255, 255, 0.40) 100%)' }}></div>
                                    <div style={{ width: 63.10, height: 50.07, left: 29.81, top: 24.08, position: 'absolute', background: '#352E35' }}></div>
                                    <div style={{ width: 6.55, height: 8.06, left: 33.41, top: 20.94, position: 'absolute', background: '#D1D1D1' }}></div>
                                    <div style={{ width: 6.49, height: 8.08, left: 88.25, top: 44.79, position: 'absolute', background: '#D1D1D1' }}></div>
                                    <div style={{ width: 60.46, height: 49.15, left: 36.08, top: 1.70, position: 'absolute', mixBlendMode: 'soft-light', background: 'white' }}></div>
                                    <div style={{ width: 49.54, height: 37.21, left: 29.70, top: 36.93, position: 'absolute', background: '#2B242A' }}></div>
                                    <div style={{ width: 7.89, height: 5.99, left: 23.90, top: 87.38, position: 'absolute', background: '#2B242A' }}></div>
                                    <div style={{ width: 3.88, height: 8.07, left: 21.94, top: 91.87, position: 'absolute', transform: 'rotate(-55.79deg)', transformOrigin: '0 0', background: '#161013' }}></div>
                                    <div style={{ width: 7.89, height: 5.99, left: 21.33, top: 91.15, position: 'absolute', background: '#2B242A' }}></div>
                                </div>
                            </div>
                            <div style={{ width: 43.69, height: 58.14, left: 81.47, top: 137.31, position: 'absolute', background: '#FF7CA6' }}></div>
                            <div style={{ width: 43.69, height: 58.14, left: 81.47, top: 137.31, position: 'absolute' }}>
                                <div style={{ width: 43.69, height: 58.14, left: 0, top: 0, position: 'absolute', background: '#FF7CA6' }}></div>
                                <div style={{ width: 43.69, height: 58.14, left: -2.75, top: 3.20, position: 'absolute', background: '#FB94B5' }}></div>
                                <div style={{ width: 43.69, height: 61.35, left: -4.12, top: 4.58, position: 'absolute', background: '#FFAFC9' }}></div>
                                <div style={{ width: 23.05, height: 56.55, left: -6.41, top: 4.35, position: 'absolute', background: '#FEF2F7' }}></div>
                            </div>
                            <div style={{ width: 93.64, height: 180.56, left: 127.29, top: 245.09, position: 'absolute' }}>
                                <div style={{ width: 93.64, height: 180.56, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(185deg, #FF78A3 0%, #FF8EB2 100%)' }}></div>
                                <div style={{ width: 93.64, height: 180.56, left: 0, top: 0, position: 'absolute' }}>
                                    <div style={{ width: 93.64, height: 180.56, left: 0, top: 0, position: 'absolute', background: '#F89AB8' }}></div>
                                    <div style={{ width: 108.24, height: 182.39, left: -5.48, top: 2.77, position: 'absolute', background: '#FBC6D7' }}></div>
                                    <div style={{ width: 108.24, height: 182.39, left: -5.48, top: 2.77, position: 'absolute' }}>
                                        <div style={{ width: 108.24, height: 182.39, left: 0, top: 0, position: 'absolute', background: '#FBC6D7' }}></div>
                                        <div style={{ width: 72.40, height: 135.06, left: 32.73, top: 36.04, position: 'absolute', background: '#FEB3CB' }}></div>
                                    </div>
                                    <div style={{ width: 103.67, height: 178.96, left: -4.97, top: 19.24, position: 'absolute', background: '#FEF2F7' }}></div>
                                </div>
                            </div>
                            <div style={{ width: 107.11, height: 170.03, left: 35.24, top: 253.10, position: 'absolute' }}>
                                <div style={{ width: 107.11, height: 170.03, left: 0, top: 0, position: 'absolute', background: '#FF7CA6' }}></div>
                                <div style={{ width: 107.11, height: 170.03, left: 0, top: 0, position: 'absolute' }}>
                                    <div style={{ width: 107.11, height: 170.03, left: 0, top: 0, position: 'absolute', background: '#FF7CA6' }}></div>
                                    <div style={{ width: 107.11, height: 170.03, left: -4.58, top: 0, position: 'absolute', background: '#FEB3CB' }}></div>
                                    <div style={{ width: 100.46, height: 171.08, left: -7.32, top: -3.20, position: 'absolute', background: '#FBC6D7' }}></div>
                                    <div style={{ width: 92.12, height: 168.20, left: -8.82, top: -1.15, position: 'absolute', background: '#FEF2F7' }}></div>
                                </div>
                            </div>
                            <div style={{ width: 88.35, height: 69.18, left: 98.63, top: 249.67, position: 'absolute' }}>
                                <div style={{ width: 88.35, height: 69.18, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(200deg, #78AEEC 0%, #142AE9 100%)' }}></div>
                                <div style={{ width: 88.35, height: 69.18, left: 0, top: 0, position: 'absolute' }}>
                                    <div style={{ width: 88.35, height: 69.18, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(200deg, #78AEEC 0%, #142AE9 100%)' }}></div>
                                    <div style={{ width: 90.85, height: 54.01, left: -1.14, top: 14.42, position: 'absolute', border: '1px rgba(255, 255, 255, 0.50) solid' }}></div>
                                    <div style={{ width: 14.51, height: 63.63, left: 64.76, top: 4.81, position: 'absolute', border: '1px rgba(255, 255, 255, 0.49) solid' }}></div>
                                    <div style={{ width: 9.61, height: 7.55, left: 48.29, top: 28.38, position: 'absolute', background: 'linear-gradient(275deg, #C1C5FF 0%, rgba(193, 197, 255, 0) 100%)' }}></div>
                                    <div style={{ width: 30.44, height: 7.68, left: 26.09, top: 24.03, position: 'absolute', background: 'linear-gradient(236deg, #C1C5FF 0%, rgba(198.69, 202.16, 255, 0) 100%)' }}></div>
                                    <div style={{ width: 30.67, height: 71.95, left: 68.88, top: -2.52, position: 'absolute', background: 'rgba(0, 23, 223, 0.50)' }}></div>
                                    <div style={{ width: 28.62, height: 37.07, left: -2.06, top: 1.37, position: 'absolute', background: 'linear-gradient(349deg, #DBF3F8 0%, #99B5F3 100%)' }}></div>
                                </div>
                            </div>
                            <div style={{ width: 70.78, height: 115.39, left: 100.69, top: 158.13, position: 'absolute', background: 'linear-gradient(179deg, #94BFFF 0%, #0D25FE 100%)' }}></div>
                            <div style={{ width: 70.78, height: 115.39, left: 100.69, top: 158.13, position: 'absolute' }}>
                                <div style={{ width: 70.78, height: 115.39, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(179deg, #94BFFF 0%, #0D25FE 100%)' }}></div>
                                <div style={{ width: 37.99, height: 35.70, left: 11.44, top: -1.60, position: 'absolute', background: '#6B85FF' }}></div>
                                <div style={{ width: 36.28, height: 33.18, left: 11.44, top: -1.14, position: 'absolute', background: '#4464FE' }}></div>
                                <div style={{ width: 12.83, height: 55.15, left: 4.58, top: 50.35, position: 'absolute', background: 'linear-gradient(176deg, #99B5F3 0%, #DBF3F8 100%)' }}></div>
                                <div style={{ width: 16.46, height: 29.75, left: 19.22, top: 73.92, position: 'absolute', background: 'linear-gradient(337deg, #C1C5FF 0%, rgba(193, 197, 255, 0) 100%)' }}></div>
                                <div style={{ width: 5.49, height: 10.07, left: 21.97, top: 77.56, position: 'absolute', transform: 'rotate(-14.27deg)', transformOrigin: '0 0', background: 'linear-gradient(348deg, #C1C5FF 0%, rgba(193, 197, 255, 0) 100%)' }}></div>
                                <div style={{ width: 11.37, height: 17.24, left: 52.33, top: 30.39, position: 'absolute', transform: 'rotate(-159.90deg)', transformOrigin: '0 0', background: 'linear-gradient(340deg, #C1C5FF 0%, rgba(193, 197, 255, 0) 100%)' }}></div>
                                <div style={{ width: 19.80, height: 5.30, left: 11.85, top: 51.12, position: 'absolute', transform: 'rotate(-15deg)', transformOrigin: '0 0', background: '#4262FE' }}></div>
                                <div style={{ width: 74.15, height: 89.71, left: 15.56, top: -10.30, position: 'absolute', background: '#2D42FF' }}></div>
                                <div style={{ width: 14.65, height: 26.81, left: -1.37, top: 12.34, position: 'absolute', background: 'linear-gradient(343deg, #99B5F3 0%, #DBF3F8 100%)' }}></div>
                            </div>
                            <div style={{ width: 51.74, height: 63.36, left: 197.19, top: 404.80, position: 'absolute' }}>
                                <div style={{ width: 42.79, height: 55.12, left: 8.97, top: 8.21, position: 'absolute', background: '#CAF4F3' }}></div>
                                <div style={{ width: 37.08, height: 61.46, left: 8.71, top: -0.03, position: 'absolute', background: '#F6FEFD' }}></div>
                                <div style={{ width: 11.90, height: 2.11, left: 11.51, top: 48.78, position: 'absolute', border: '3px #14D1A4 solid' }}></div>
                                <div style={{ width: 11.90, height: 1.92, left: 12.43, top: 42.37, position: 'absolute', border: '3px #14D1A4 solid' }}></div>
                                <div style={{ width: 9.15, height: 1.43, left: 14.26, top: 36.42, position: 'absolute', border: '3px #14D1A4 solid' }}></div>
                                <div style={{ width: 26.09, height: 23.81, left: 9.06, top: 33.61, position: 'absolute', border: '2px #CEF4F4 solid' }}></div>
                                <div style={{ width: 31.76, height: 19.18, left: 0.07, top: 19.60, position: 'absolute' }}>
                                    <div style={{ width: 14.88, height: 14.19, left: 16.89, top: 1.18, position: 'absolute' }}>
                                        <div style={{ width: 14.88, height: 5.06, left: 0, top: -0, position: 'absolute', border: '1px #14D1A4 solid' }}></div>
                                        <div style={{ width: 7.39, height: 10.98, left: 0.01, top: 3.20, position: 'absolute', border: '1px #14D1A4 solid' }}></div>
                                    </div>
                                    <div style={{ width: 16.12, height: 14.98, left: 15.36, top: -0.06, position: 'absolute', transform: 'rotate(162.07deg)', transformOrigin: '0 0' }}>
                                        <div style={{ width: 15.11, height: 5.61, left: -1.80, top: 0.58, position: 'absolute', transform: 'rotate(142.37deg)', transformOrigin: '0 0', border: '1px #14D1A4 solid' }}></div>
                                        <div style={{ width: 7.39, height: 10.98, left: 0.44, top: 4.06, position: 'absolute', transform: 'rotate(162.07deg)', transformOrigin: '0 0', border: '1px #14D1A4 solid' }}></div>
                                    </div>
                                    <div style={{ width: 2.29, height: 2.29, left: 15.29, top: 2.33, position: 'absolute', background: '#14D1A4', borderRadius: 9999, border: '1px #14D1A4 solid' }} />
                                </div>
                            </div>
                            <div style={{ width: 43.87, height: 61.96, left: 14.56, top: 405.06, position: 'absolute', transform: 'rotate(13.59deg)', transformOrigin: '0 0' }}>
                                <div style={{ width: 43.87, height: 25.02, left: -8.68, top: 35.91, position: 'absolute', transform: 'rotate(13.59deg)', transformOrigin: '0 0', background: '#C5F4F2' }}></div>
                                <div style={{ width: 43.09, height: 49.05, left: -1.86, top: 8.36, position: 'absolute', transform: 'rotate(13.59deg)', transformOrigin: '0 0', background: '#F1FEFC' }}></div>
                                <div style={{ width: 7.09, height: 5.26, left: -3.11, top: 38.90, position: 'absolute', border: '3px #14D1A4 solid' }}></div>
                                <div style={{ width: 7.09, height: 5.26, left: 2.84, top: 34.33, position: 'absolute', border: '3px #14D1A4 solid' }}></div>
                                <div style={{ width: 5.49, height: 4.12, left: 9.70, top: 30.21, position: 'absolute', border: '3px #14D1A4 solid' }}></div>
                                <div style={{ width: 15.79, height: 12.03, left: 21.73, top: 5.25, position: 'absolute', transform: 'rotate(13.59deg)', transformOrigin: '0 0', background: '#F7FFFD' }}></div>
                                <div style={{ width: 20.14, height: 5.66, left: -9.43, top: 47.49, position: 'absolute', transform: 'rotate(13.59deg)', transformOrigin: '0 0', border: '3px #AAFEE7 solid' }}></div>
                                <div style={{ width: 11.44, height: 15.56, left: 15.32, top: 40.53, position: 'absolute', transform: 'rotate(13.59deg)', transformOrigin: '0 0', background: '#AAFEE7', border: '1px #DAFFF5 solid' }}></div>
                                <div style={{ width: 25.76, height: 12.75, left: 7.85, top: 9.76, position: 'absolute', transform: 'rotate(17.36deg)', transformOrigin: '0 0' }}>
                                    <div style={{ width: 14.32, height: 11.54, left: 10.56, top: 4.57, position: 'absolute', transform: 'rotate(17.36deg)', transformOrigin: '0 0' }}>
                                        <div style={{ width: 12.49, height: 3.86, left: 1.75, top: 0.55, position: 'absolute', transform: 'rotate(17.36deg)', transformOrigin: '0 0', background: 'white', border: '1px #14D1A4 solid' }}></div>
                                        <div style={{ width: 8.70, height: 9.61, left: 1.60, top: 0.98, position: 'absolute', transform: 'rotate(28.25deg)', transformOrigin: '0 0', background: 'white', border: '1px #14D1A4 solid' }}></div>
                                    </div>
                                    <div style={{ width: 14.32, height: 11.54, left: 13.30, top: 5.43, position: 'absolute', transform: 'rotate(-162.64deg)', transformOrigin: '0 0' }}>
                                        <div style={{ width: 12.49, height: 3.86, left: -1.75, top: -0.55, position: 'absolute', transform: 'rotate(-162.64deg)', transformOrigin: '0 0', border: '1px #14D1A4 solid' }}></div>
                                        <div style={{ width: 8.70, height: 9.61, left: -1.87, top: -0.10, position: 'absolute', transform: 'rotate(-173.54deg)', transformOrigin: '0 0', border: '1px #14D1A4 solid' }}></div>
                                    </div>
                                    <div style={{ width: 2.29, height: 3.66, left: 11.35, top: 3.55, position: 'absolute', transform: 'rotate(19.74deg)', transformOrigin: '0 0', background: '#14D1A4', borderRadius: 9999, border: '1px #14D1A4 solid' }} />
                                </div>
                            </div>
                            <div style={{ width: 76.33, height: 66.35, left: 86.96, top: 103.44, position: 'absolute' }}>
                                <div style={{ width: 30.67, height: 38.28, left: 22.66, top: 28.08, position: 'absolute', background: '#FF7CA6' }}></div>
                                <div style={{ width: 30.89, height: 38.43, left: 22.88, top: 27.92, position: 'absolute' }}>
                                    <div style={{ width: 30.89, height: 38.43, left: 0, top: 0, position: 'absolute', background: '#FF7CA6' }}></div>
                                    <div style={{ width: 31.69, height: 32.65, left: -2.03, top: 3.96, position: 'absolute', background: '#FEB3CB' }}></div>
                                    <div style={{ width: 32.06, height: 32.07, left: -2.98, top: 5.72, position: 'absolute', background: '#FBC6D7' }}></div>
                                    <div style={{ width: 11.35, height: 18.02, left: 23.67, top: 7.31, position: 'absolute', transform: 'rotate(165.83deg)', transformOrigin: '0 0', background: 'rgba(254, 242, 247, 0.30)' }}></div>
                                </div>
                                <div style={{ width: 51.16, height: 60.12, left: 25.17, top: 0, position: 'absolute', background: 'linear-gradient(180deg, #050753 0%, #008294 100%)' }}></div>
                                <div style={{ width: 7.40, height: 7.34, left: 48.74, top: 38.15, position: 'absolute' }}>
                                    <div style={{ width: 7.40, height: 7.34, left: 0, top: 0, position: 'absolute', background: '#FBC6D7', border: '1px #FC719A solid' }}></div>
                                    <div style={{ width: 4.81, height: 3.69, left: 1.37, top: 1.11, position: 'absolute', background: '#FC719A' }}></div>
                                </div>
                                <div style={{ width: 70.21, height: 33.11, left: 0, top: 10.07, position: 'absolute' }}>
                                    <div style={{ width: 66.55, height: 33.11, left: 3.66, top: 0, position: 'absolute', background: 'linear-gradient(81deg, #2B02CD 0%, #5899FF 51%, #5EC0DF 86%, white 100%)' }}></div>
                                    <div style={{ width: 66.55, height: 33.11, left: 3.66, top: 0, position: 'absolute' }}>
                                        <div style={{ width: 66.55, height: 33.11, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(87deg, #02C3CD 0%, white 100%)' }}></div>
                                        <div style={{ width: 43.25, height: 28.61, left: -7.32, top: 9.60, position: 'absolute', background: 'linear-gradient(9deg, rgba(255, 255, 255, 0.30) 0%, rgba(0, 59, 213, 0) 100%, rgba(255, 255, 255, 0.30) 100%)' }}></div>
                                        <div style={{ width: 22.03, height: 23.82, left: -1.37, top: -2.97, position: 'absolute', background: '#C1DBF7' }}></div>
                                    </div>
                                    <div style={{ width: 66.55, height: 33.11, left: 0, top: 0, position: 'absolute' }}>
                                        <div style={{ width: 66.55, height: 33.11, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(87deg, #02C3CD 0%, white 100%)' }}></div>
                                    </div>
                                    <div style={{ width: 20.37, height: 9.91, left: 23.34, top: 8.47, position: 'absolute', border: '1px #BAD4F6 solid' }}></div>
                                    <div style={{ width: 7.04, height: 5.49, left: 27, top: 4.19, position: 'absolute', background: '#B8D2F6' }}></div>
                                </div>
                            </div>
                            <div style={{ width: 68.66, height: 98.60, left: 76.66, top: 89.32, position: 'absolute', background: '#FF7CA6' }}></div>
                            <div style={{ width: 68.66, height: 98.60, left: 76.66, top: 89.32, position: 'absolute' }}>
                                <div style={{ width: 68.66, height: 98.60, left: 0, top: 0, position: 'absolute', background: '#FF7CA6' }}></div>
                                <div style={{ width: 68.66, height: 101.06, left: -2.97, top: -0.70, position: 'absolute', background: '#FEB3CB' }}></div>
                                <div style={{ width: 68.66, height: 101.06, left: -2.97, top: -0.70, position: 'absolute' }}>
                                    <div style={{ width: 68.66, height: 101.06, left: 0, top: 0, position: 'absolute', background: '#FEB3CB' }}></div>
                                    <div style={{ width: 68.66, height: 101.67, left: -2.29, top: -0.44, position: 'absolute', background: '#FBC6D7' }}></div>
                                    <div style={{ width: 62.38, height: 106.87, left: -1.27, top: -2.11, position: 'absolute', background: '#FEF2F7' }}></div>
                                </div>
                            </div>
                            <div style={{ width: 108.61, height: 115.94, left: 114.36, top: 170.75, position: 'absolute' }}>
                                <div style={{ width: 72.57, height: 73.16, left: 0, top: 28.33, position: 'absolute', transform: 'rotate(-22.98deg)', transformOrigin: '0 0', background: 'linear-gradient(172deg, rgba(244.54, 255, 124.31, 0) 0%, #00FF47 54%, #00A72F 100%)' }}></div>
                                <div style={{ width: 82.59, height: 71.56, left: 4.64, top: 50.06, position: 'absolute', transform: 'rotate(-22.98deg)', transformOrigin: '0 0', background: 'radial-gradient(67.87% 67.62% at 255.05% 189.54%, rgba(255, 235.66, 61.63, 0.50) 0%, rgba(29.67, 184.88, 16.18, 0) 100%)', borderRadius: 9999 }} />
                                <div style={{ width: 76.89, height: 65.18, left: 8.30, top: 52.41, position: 'absolute', transform: 'rotate(-22.98deg)', transformOrigin: '0 0', background: 'rgba(55.59, 255, 38.25, 0.20)', borderRadius: 9999 }} />
                                <div style={{ width: 72.77, height: 59.96, left: 11.05, top: 53.09, position: 'absolute', transform: 'rotate(-22.98deg)', transformOrigin: '0 0', background: 'radial-gradient(42.94% 42.93% at 35.61% 22.30%, #F5FF7C 0%, #00FF47 55%, #00A72F 100%)', borderRadius: 9999 }} />
                                <div style={{ width: 90.40, height: 83.61, left: 11.05, top: 24.69, position: 'absolute' }}>
                                    <div style={{ width: 72.77, height: 59.96, left: 0, top: 28.41, position: 'absolute', transform: 'rotate(-22.98deg)', transformOrigin: '0 0', background: '#68FF92', borderRadius: 9999 }} />
                                    <div style={{ width: 72.77, height: 59.96, left: -19.56, top: -7.37, position: 'absolute', transform: 'rotate(-22.98deg)', transformOrigin: '0 0', borderRadius: 9999, border: '3px white solid' }} />
                                    <div style={{ width: 61.13, height: 59.96, left: 28.50, top: 71.85, position: 'absolute', transform: 'rotate(-22.98deg)', transformOrigin: '0 0', borderRadius: 9999, border: '3px white solid' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: 158, left: 25, top: 40, position: 'absolute', color: 'white', fontSize: 30, fontFamily: 'SF Pro Display', fontWeight: '700', lineHeight: 45, letterSpacing: 0.50, wordWrap: 'break-word' }}>Anindita Rahmawati</div>
                    <div style={{ left: 25, top: 140, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                        <div style={{ width: 24, height: 24, position: 'relative' }}>
                            <div style={{ width: 18, height: 14, left: 3, top: 5, position: 'absolute', background: 'white' }}></div>
                            <div style={{ width: 18, height: 7, left: 3, top: 5, position: 'absolute', background: '#FF0000' }}></div>
                        </div>
                        <div style={{ color: 'white', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.50, wordWrap: 'break-word' }}>Indonesia</div>
                    </div>
                    <div style={{ left: 24, top: 315, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                        <div style={{ color: '#121212', fontSize: 12, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.50, wordWrap: 'break-word' }}>Age : 27</div>
                        <div style={{ color: '#121212', fontSize: 12, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.50, wordWrap: 'break-word' }}>Birth : 24 - 02 - 1993</div>
                        <div style={{ color: '#121212', fontSize: 12, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.50, wordWrap: 'break-word' }}>Sex : Women</div>
                        <div style={{ color: '#121212', fontSize: 12, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.50, wordWrap: 'break-word' }}>WTA : 10.</div>
                    </div>
                    <div style={{ left: 25, top: 428, position: 'absolute', color: '#121212', fontSize: 12, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.50, wordWrap: 'break-word' }}>Social Media</div>
                    <div style={{ left: 25, top: 212, position: 'absolute', color: '#121212', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '600', letterSpacing: 0.50, wordWrap: 'break-word' }}>Biography</div>
                    <div style={{ width: 45, height: 20, left: 27, top: 452, position: 'absolute' }}>
                        <div style={{ width: 20, height: 20, paddingLeft: 2.67, paddingRight: 2.67, paddingTop: 4, paddingBottom: 4, left: 0, top: 0, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                            <div style={{ width: 14.67, height: 12, background: '#BACCFD' }}></div>
                        </div>
                        <div style={{ width: 20, height: 20, paddingTop: 1.33, paddingBottom: 2.67, paddingLeft: 6.67, paddingRight: 5.33, left: 25, top: 0, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                            <div style={{ width: 8, height: 16, background: '#BACCFD' }}></div>
                        </div>
                    </div>
                    <div style={{ width: 50, height: 60, left: 24, top: 238, position: 'absolute' }}>
                        <div style={{ width: 50, height: 60, left: 0, top: 0, position: 'absolute', background: '#FFC2F9', borderTopLeftRadius: 20, borderTopRightRadius: 10, borderBottomRightRadius: 20, borderBottomLeftRadius: 10 }} />
                        <div style={{ width: 50, height: 60, left: 0, top: 0, position: 'absolute' }}>
                            <div style={{ width: 50, height: 60, left: 0, top: 0, position: 'absolute', background: '#C4C4C4', borderTopLeftRadius: 20, borderTopRightRadius: 10, borderBottomRightRadius: 20, borderBottomLeftRadius: 10 }} />
                            <div style={{ width: 41, height: 56.62, left: 6, top: 5, position: 'absolute' }}>
                                <div style={{ width: 32.54, height: 19.52, left: 0, top: 37.10, position: 'absolute' }}>
                                    <div style={{ width: 32.54, height: 19.52, left: 0, top: 0, position: 'absolute', background: '#75FDAB' }}></div>
                                    <div style={{ width: 32.54, height: 19.52, left: 0, top: 0, position: 'absolute' }}>
                                        <div style={{ width: 32.54, height: 19.52, left: 0, top: 0, position: 'absolute', background: '#00D355' }}></div>
                                        <div style={{ width: 32.54, height: 19.52, left: 0.78, top: 0, position: 'absolute', background: '#29D60C' }}></div>
                                        <div style={{ width: 32.54, height: 19.52, left: 1.56, top: 0, position: 'absolute', background: 'linear-gradient(21deg, #00D355 0%, #88FF3F 100%)' }}></div>
                                        <div style={{ width: 48, height: 22, left: 91.72, top: 124.47, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0', background: 'linear-gradient(92deg, white 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
                                    </div>
                                    <div style={{ width: 6, height: 63, left: 53, top: 90, position: 'absolute', background: 'linear-gradient(0deg, #77FF9D 0%, rgba(119, 255, 157.08, 0) 100%)' }}></div>
                                    <div style={{ width: 0.78, height: 8.20, left: 24.08, top: 11.71, position: 'absolute', background: 'linear-gradient(360deg, #77FF9D 0%, rgba(119, 255, 157.08, 0) 100%)' }}></div>
                                </div>
                                <div style={{ width: 37.10, height: 45.95, left: 3.90, top: 0, position: 'absolute' }}>
                                    <div style={{ width: 25.49, height: 39.83, left: 0, top: 8.30, position: 'absolute', transform: 'rotate(-19deg)', transformOrigin: '0 0', background: '#5236FF' }}></div>
                                    <div style={{ width: 19.26, height: 31.45, left: 3.99, top: 13.99, position: 'absolute', transform: 'rotate(-19deg)', transformOrigin: '0 0', background: '#4021FE' }}></div>
                                    <div style={{ width: 20.88, height: 20.72, left: 1.78, top: 7.28, position: 'absolute', background: '#5236FF' }}></div>
                                    <div style={{ width: 23.07, height: 27.41, left: 0.57, top: 12.56, position: 'absolute' }}>
                                        <div style={{ width: 6, height: 9.99, left: 8.43, top: 17.42, position: 'absolute' }}>
                                            <div style={{ width: 5.28, height: 9.99, left: 0.36, top: 0, position: 'absolute', background: '#FBC6D7' }}></div>
                                            <div style={{ width: 5.28, height: 9.99, left: 0.36, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 5.28, height: 9.99, left: 0, top: 0, position: 'absolute', background: '#FF7CA6' }}></div>
                                                <div style={{ width: 5, height: 4.85, left: -0.08, top: 0, position: 'absolute', background: '#FF7CA6' }}></div>
                                            </div>
                                        </div>
                                        <div style={{ width: 23.07, height: 19.99, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ width: 3.14, height: 4, left: 0, top: 7.80, position: 'absolute', transform: 'rotate(-17.58deg)', transformOrigin: '0 0' }}>
                                                <div style={{ width: 3.14, height: 4, left: 0, top: 0, position: 'absolute', transform: 'rotate(-17.56deg)', transformOrigin: '0 0', background: '#FBC6D7' }}></div>
                                                <div style={{ width: 2.17, height: 2.61, left: 0.80, top: 0.49, position: 'absolute', transform: 'rotate(-17.58deg)', transformOrigin: '0 0', background: '#FF7CA6' }}></div>
                                            </div>
                                            <div style={{ width: 3.14, height: 4, left: 23.07, top: 8.37, position: 'absolute', transform: 'rotate(-162.42deg)', transformOrigin: '0 0' }}>
                                                <div style={{ width: 3.14, height: 4, left: 0, top: 0, position: 'absolute', transform: 'rotate(-162.44deg)', transformOrigin: '0 0', background: '#FBC6D7' }}></div>
                                                <div style={{ width: 2.17, height: 2.61, left: -0.80, top: 0.49, position: 'absolute', transform: 'rotate(-162.42deg)', transformOrigin: '0 0', background: '#FF7CA6' }}></div>
                                            </div>
                                            <div style={{ width: 17.15, height: 19.99, left: 2.86, top: 0, position: 'absolute', background: '#FBC6D7' }}></div>
                                            <div style={{ width: 17.15, height: 19.99, left: 2.86, top: 0, position: 'absolute' }}>
                                                <div style={{ width: 17.15, height: 19.99, left: 0, top: 0, position: 'absolute', background: '#FBC6D7' }}></div>
                                                <div style={{ width: 4.69, height: 4.69, left: 12.45, top: 12.04, position: 'absolute', background: '#FF5E5E' }}></div>
                                                <div style={{ width: 4.69, height: 4.69, left: 0.34, top: 12.04, position: 'absolute', background: '#FF5E5E' }}></div>
                                            </div>
                                            <div style={{ width: 3.38, height: 1.04, left: 9.84, top: 16.46, position: 'absolute', background: '#FF7FA8' }}></div>
                                            <div style={{ width: 1.30, height: 2.34, left: 6.85, top: 8.78, position: 'absolute', background: '#361AE7' }}></div>
                                            <div style={{ width: 1.30, height: 2.34, left: 14.66, top: 8.78, position: 'absolute', background: '#361AE7' }}></div>
                                            <div style={{ width: 2.02, height: 4.43, left: 10.82, top: 9.24, position: 'absolute', background: '#FF7FA8' }}></div>
                                        </div>
                                    </div>
                                    <div style={{ width: 17.44, height: 4.88, left: 3.51, top: 15.42, position: 'absolute' }}>
                                        <div style={{ width: 17.44, height: 4.88, left: 0, top: 0, position: 'absolute', background: 'white' }}></div>
                                        <div style={{ width: 17.44, height: 4.88, left: 0, top: 0, position: 'absolute' }}>
                                            <div style={{ width: 17.44, height: 4.88, left: 0, top: 0, position: 'absolute', background: 'white' }}></div>
                                            <div style={{ width: 19.36, height: 5.09, left: 2.83, top: 3.65, position: 'absolute', transform: 'rotate(-11.90deg)', transformOrigin: '0 0', background: '#E9E9E9' }}></div>
                                        </div>
                                    </div>
                                    <div style={{ width: 17.13, height: 8.96, left: 3.86, top: 11.45, position: 'absolute', background: '#5236FF' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: 200, height: 100, left: 555, top: 775, position: 'absolute' }}>
                    <div style={{ width: 200, height: 100, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(0deg, #FF9A3E 0%, #FF9A3E 100%)', borderRadius: 20 }} />
                    <div style={{ width: 200, height: 100, left: 0, top: 0, position: 'absolute' }}>
                        <div style={{ width: 200, height: 100, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(0deg, #F44771 0%, #F44771 100%)', borderRadius: 20 }} />
                        <div style={{ width: 200, height: 100, left: 210, top: 34, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', background: 'linear-gradient(0deg, #FFC087 0%, #FFC087 100%)', borderRadius: 50 }} />
                        <div style={{ width: 200, height: 100, left: 126, top: -24, position: 'absolute', background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.30) 100%)', borderRadius: 50 }} />
                        <div style={{ width: 200, height: 100, left: 182, top: -117, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', background: 'linear-gradient(0deg,  0%,  100%)', borderRadius: 50, border: '1px rgba(255, 255, 255, 0.30) solid' }} />
                    </div>
                    <div style={{ left: 15, top: 20, position: 'absolute', color: 'white', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.50, wordWrap: 'break-word' }}>Doubles</div>
                    <div style={{ left: 15, top: 53, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 5, display: 'inline-flex' }}>
                        <div style={{ color: 'white', fontSize: 25, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.50, wordWrap: 'break-word' }}>20</div>
                        <div style={{ width: 24, height: 24, paddingTop: 3, paddingBottom: 3.51, paddingLeft: 4, paddingRight: 4.13, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <div style={{ width: 15.87, height: 17.49, background: 'white' }}></div>
                        </div>
                    </div>
                </div>
                <div style={{ width: 200, height: 100, left: 780, top: 775, position: 'absolute' }}>
                    <div style={{ width: 200, height: 100, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(0deg, #332A7C 0%, #332A7C 100%)', borderRadius: 20 }} />
                    <div style={{ width: 200, height: 100, left: 0, top: 0, position: 'absolute' }}>
                        <div style={{ width: 200, height: 100, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(0deg, #F44771 0%, #F44771 100%)', borderRadius: 20 }} />
                        <div style={{ width: 200, height: 100, left: 293.60, top: -89, position: 'absolute', transform: 'rotate(120deg)', transformOrigin: '0 0', background: 'linear-gradient(0deg, #7F77C5 0%, #7F77C5 100%)', borderRadius: 50 }} />
                        <div style={{ width: 200, height: 100, left: 118, top: 45, position: 'absolute', background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.30) 100%)', borderRadius: 50 }} />
                        <div style={{ width: 200, height: 100, left: 86.76, top: 85.07, position: 'absolute', transform: 'rotate(-105deg)', transformOrigin: '0 0', background: 'linear-gradient(0deg,  0%,  100%)', borderRadius: 50, border: '1px rgba(255, 255, 255, 0.30) solid' }} />
                    </div>
                    <div style={{ left: 15, top: 20, position: 'absolute', color: 'white', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.50, wordWrap: 'break-word' }}>Mixed Doubles</div>
                    <div style={{ left: 15, top: 53, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 5, display: 'inline-flex' }}>
                        <div style={{ color: 'white', fontSize: 25, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.50, wordWrap: 'break-word' }}>16</div>
                        <div style={{ width: 24, height: 24, paddingTop: 2.51, paddingBottom: 4, paddingLeft: 4, paddingRight: 4.13, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <div style={{ width: 15.87, height: 17.49, background: 'white' }}></div>
                        </div>
                    </div>
                </div>
                <div style={{ width: 330, height: 300, left: 650, top: 403, position: 'absolute', boxShadow: '0px 15px 40px rgba(222, 222, 222, 0.10)' }}>
                    <div style={{ width: 330, height: 300, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '0px 15px 40px rgba(222, 222, 222, 0.10)', borderRadius: 30 }} />
                    <div style={{ width: 200, height: 200, left: 68, top: 67, position: 'absolute' }}>
                        <div style={{ width: 185, height: 185, left: 5, top: 8, position: 'absolute', background: '#EFF3FE', borderRadius: 9999 }} />
                        <div style={{ width: 200, height: 200, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(135deg, #FFF6B7 0%, #F6416C 100%)', borderRadius: 9999 }} />
                        <div style={{ width: 100, height: 100, left: 0, top: 100, position: 'absolute', background: 'linear-gradient(135deg, #FFE985 0%, #FA742B 100%)' }}></div>
                        <div style={{ width: 100, height: 130.90, left: 100, top: 0, position: 'absolute', background: 'linear-gradient(135deg, #CE9FFC 0%, #7367F0 100%)' }}></div>
                    </div>
                    <div style={{ left: 102, top: 25, position: 'absolute', color: '#121212', fontSize: 20, fontFamily: 'SF Pro Display', fontWeight: '500', letterSpacing: 0.50, wordWrap: 'break-word' }}>Global Statistic</div>
                    <div style={{ width: 78, height: 47, left: 129, top: 143, position: 'absolute' }}>
                        <div style={{ left: 0, top: 0, position: 'absolute', color: '#121212', fontSize: 20, fontFamily: 'SF Pro Display', fontWeight: '700', letterSpacing: 0.50, wordWrap: 'break-word' }}>23 Wins</div>
                        <div style={{ left: 14, top: 29, position: 'absolute', color: '#BACCFD', fontSize: 15, fontFamily: 'SF Pro Display', fontWeight: '400', letterSpacing: 0.50, wordWrap: 'break-word' }}>(75% )</div>
                    </div>
                    <div style={{ height: 10, left: 115, top: 280, position: 'absolute' }}>
                        <div style={{ width: 10, height: 10, left: 0, top: 0, position: 'absolute', background: 'linear-gradient(135deg, #CE9FFC 0%, #7367F0 100%)' }} />
                        <div style={{ width: 10, height: 10, left: 45, top: 0, position: 'absolute', background: 'linear-gradient(135deg, #FFF6B7 0%, #F6416C 100%)' }} />
                        <div style={{ width: 10, height: 10, left: 90, top: 0, position: 'absolute', background: 'linear-gradient(135deg, #FFE985 0%, #FA742B 100%)' }} />
                    </div>
                </div>
                <div style={{ width: 30, height: 30, left: 1365, top: 51, position: 'absolute' }}>
                    <div style={{ width: 30, height: 30, left: 0, top: 0, position: 'absolute', background: '#D9C8FF', borderRadius: 5 }} />
                    <div style={{ width: 30, height: 30, left: 0, top: 0, position: 'absolute' }}>
                        <div style={{ width: 30, height: 30, left: 0, top: 0, position: 'absolute', background: '#05BCF5', borderRadius: 5 }} />
                        <div style={{ width: 20.50, height: 28, left: 5, top: 3, position: 'absolute' }}>
                            <div style={{ width: 18.37, height: 11.02, left: 2.13, top: 16.98, position: 'absolute' }}>
                                <div style={{ width: 18.37, height: 11.02, left: 0, top: 0, position: 'absolute', background: '#FFD4C7' }}></div>
                                <div style={{ width: 18.37, height: 11.02, left: 0, top: 0, position: 'absolute' }}>
                                    <div style={{ width: 18.37, height: 11.02, left: 0, top: 0, position: 'absolute', background: '#00D355' }}></div>
                                    <div style={{ width: 18.37, height: 11.02, left: 0.44, top: 0, position: 'absolute', background: '#FFB7A0' }}></div>
                                    <div style={{ width: 18.37, height: 11.02, left: 0.88, top: 0, position: 'absolute', background: 'linear-gradient(180deg, #FFAF8D 0%, #FFB672 100%)' }}></div>
                                    <div style={{ width: 48, height: 22, left: 110, top: 126, position: 'absolute', transform: 'rotate(30deg)', transformOrigin: '0 0', background: 'linear-gradient(92deg, white 0%, rgba(255, 255, 255, 0) 100%)' }}></div>
                                </div>
                                <div style={{ width: 0.44, height: 4.63, left: 3.90, top: 6.61, position: 'absolute', background: 'linear-gradient(180deg, rgba(235.88, 170.22, 71.75, 0) 0%, #FF9D43 100%)' }}></div>
                                <div style={{ width: 0.44, height: 4.63, left: 13.60, top: 6.61, position: 'absolute', background: 'linear-gradient(180deg, rgba(235.88, 170.22, 71.75, 0) 0%, #FF9D43 100%)' }}></div>
                            </div>
                            <div style={{ width: 13.03, height: 15.48, left: 4.66, top: 3.12, position: 'absolute' }}>
                                <div style={{ width: 3.39, height: 5.64, left: 4.76, top: 9.83, position: 'absolute' }}>
                                    <div style={{ width: 2.98, height: 5.64, left: 0.20, top: 0, position: 'absolute', background: '#FBC6D7' }}></div>
                                    <div style={{ width: 2.98, height: 5.64, left: 0.20, top: 0, position: 'absolute' }}>
                                        <div style={{ width: 2.98, height: 5.64, left: 0, top: 0, position: 'absolute', background: '#FF7CA6' }}></div>
                                        <div style={{ width: 2.82, height: 2.74, left: -0.04, top: 0, position: 'absolute', background: '#FF7CA6' }}></div>
                                    </div>
                                </div>
                                <div style={{ width: 13.03, height: 11.28, left: 0, top: 0, position: 'absolute' }}>
                                    <div style={{ width: 1.78, height: 2.26, left: 0, top: 4.41, position: 'absolute', transform: 'rotate(-17.58deg)', transformOrigin: '0 0' }}>
                                        <div style={{ width: 1.77, height: 2.26, left: 0, top: 0, position: 'absolute', transform: 'rotate(-17.56deg)', transformOrigin: '0 0', background: '#FBC6D7' }}></div>
                                        <div style={{ width: 1.23, height: 1.47, left: 0.45, top: 0.28, position: 'absolute', transform: 'rotate(-17.58deg)', transformOrigin: '0 0', background: '#FF7CA6' }}></div>
                                    </div>
                                    <div style={{ width: 1.78, height: 2.26, left: 13.03, top: 4.73, position: 'absolute', transform: 'rotate(-162.42deg)', transformOrigin: '0 0' }}>
                                        <div style={{ width: 1.77, height: 2.26, left: 0, top: 0, position: 'absolute', transform: 'rotate(-162.44deg)', transformOrigin: '0 0', background: '#FBC6D7' }}></div>
                                        <div style={{ width: 1.23, height: 1.47, left: -0.45, top: 0.28, position: 'absolute', transform: 'rotate(-162.42deg)', transformOrigin: '0 0', background: '#FF7CA6' }}></div>
                                    </div>
                                    <div style={{ width: 9.68, height: 11.28, left: 1.61, top: 0, position: 'absolute', background: '#FBC6D7' }}></div>
                                    <div style={{ width: 9.68, height: 11.28, left: 1.61, top: 0, position: 'absolute' }}>
                                        <div style={{ width: 9.68, height: 11.28, left: 0, top: 0, position: 'absolute', background: '#FBC6D7' }}></div>
                                        <div style={{ width: 2.65, height: 2.65, left: 7.03, top: 6.80, position: 'absolute', background: '#FF5E5E' }}></div>
                                        <div style={{ width: 2.65, height: 2.65, left: 0.19, top: 6.80, position: 'absolute', background: '#FF5E5E' }}></div>
                                    </div>
                                    <div style={{ width: 1.91, height: 0.59, left: 5.56, top: 9.30, position: 'absolute', background: '#FF7FA8' }}></div>
                                    <div style={{ width: 5.14, left: 3.87, top: 4.96, position: 'absolute' }}>
                                        <div style={{ width: 0.73, height: 1.32, left: 0, top: 0, position: 'absolute', background: '#3B2144' }}></div>
                                        <div style={{ width: 0.73, height: 1.32, left: 4.41, top: 0, position: 'absolute', background: '#3B2144' }}></div>
                                    </div>
                                    <div style={{ width: 1.14, height: 2.50, left: 6.11, top: 5.22, position: 'absolute', background: '#FF7FA8' }}></div>
                                </div>
                            </div>
                            <div style={{ width: 1.84, height: 0.66, left: 12.46, top: 6.80, position: 'absolute', background: '#FF7FA8' }}></div>
                            <div style={{ width: 1.84, height: 0.66, left: 7.68, top: 6.94, position: 'absolute', background: '#FF7FA8' }}></div>
                            <img style={{ width: 11.08, height: 19.69, left: 0, top: 0, position: 'absolute' }} src="https://via.placeholder.com/11x20" />
                            <img style={{ width: 11.28, height: 10.50, left: 5.25, top: 1.39, position: 'absolute' }} src="https://via.placeholder.com/11x11" />
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    )
}
