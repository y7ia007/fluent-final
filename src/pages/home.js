import { useState } from "react";
import "./home.css";

const Home = () => {
  const [textInputValue, setTextInputValue] = useState();
  const [divtextLineValue, setDivtextLineValue] = useState();
  const [phoneNumberValue, setPhoneNumberValue] = useState();
  return (
    <div className="home">
      <div className="divmain-sidebar">
        <div className="divmain-pages-icons">
          <div className="link">
            <div className="logo">
              <img className="logo-icon" alt="" src="/logo@2x.png" />
            </div>
          </div>
          <div className="link1">
            <div className="link2">
              <img className="light-icon" alt="" src="/History 4.png" />
            </div>
            <div className="badge">
              <div className="div3">18</div>
            </div>
          </div>
          <div className="link1">
            <div className="link4">
              <img className="light-icon" alt="" src="/ticket.png" />
            </div>
            <div className="badge1">
              <div className="div3">12</div>
            </div>
          </div>
          <div className="link5">
            <div className="link6">
              <img className="light-icon" alt="" src="/users.png" />
            </div>
          </div>
          <div className="link5">
            <div className="link6">
              <img className="light-icon" alt="" src="/knowledgebase.png" />
            </div>
          </div>
          <div className="link5">
            <div className="link6">
              <img className="light-icon" alt="" src="/trending-up.png" />
            </div>
          </div>
        </div>
        <div className="divcreate-new">
          <div className="create-new">
            <div className="link11">
              <img className="light-icon" alt="" src="/icon@2x.png" />
            </div>
            <div className="link11">
              <img
                className="line-duotone-time-history"
                alt=""
                src="/line-duotone--time--history-4@2x.png"
              />
            </div>
            <div className="link11">
              <img
                className="line-duotone-time-history"
                alt=""
                src="/users@2x.png"
              />
            </div>
            <div className="link14">
              <img className="curved-plus" alt="" src="/curved--plus@2x.png" />
            </div>
          </div>
        </div>
        <div className="divplatform-settings">
          <div className="link15">
            <img className="light-icon" alt="" src="/light@2x.png" />
          </div>
          <div className="link15">
            <img className="settings-icon" alt="" src="/settings@2x.png" />
          </div>
          <div className="link15">
            <img className="settings-icon" alt="" src="/notfications@2x.png" />
          </div>
          <div className="button">
            <div className="divuser-thumbnail-box">
              <img
                className="unnamedpng-icon"
                alt=""
                src="/unnamedpng@2x.png"
              />
              <div className="divsource-badge" />
            </div>
          </div>
        </div>
      </div>
      <div className="divdrawer-sidebar">
        <div className="divsidebar-header">
          <div className="inboxes">Conversations</div>
          <img className="other-icons" alt="" src="/other-icons.png" />
        </div>
        <div className="divconversations-tabs">
          <div className="conversations-tab">
            <img
              className="light-icon"
              alt=""
              src="/conversationicons@2x.png"
            />
            <div className="product">All Conversations</div>
          </div>
          <div className="conversations-tab1">
            <img
              className="light-icon"
              alt=""
              src="/property-1mentionicon@2x.png"
            />
            <div className="product">Mentions</div>
          </div>
          <div className="conversations-tab1">
            <img
              className="light-icon"
              alt=""
              src="/property-1approvalicon@2x.png"
            />
            <div className="product">Approvals</div>
          </div>
        </div>
        <div className="divconversations-tabs">
          <div className="divsection-header">
            <div className="inboxes">Inboxes</div>
            <div className="message-count">
              <div className="o" />
              <div className="div5">24</div>
            </div>
            <img className="other-icons" alt="" src="/add-new-icon.png" />
          </div>
          <div className="divchannel-tab">
            <div className="social-icons2">
              <img className="vector-icon2" alt="" src="/vector@2x.png" />
            </div>
            <div className="inboxes">Twitter</div>
            <div className="divbadge2">
              <div className="div3">4</div>
            </div>
          </div>
          <div className="divchannel-tab">
            <div className="social-icons3">
              <img className="shape-icon" alt="" src="/shape@2x.png" />
            </div>
            <div className="inboxes">Whatsapp</div>
            <div className="divbadge2">
              <div className="div3">18</div>
            </div>
          </div>
          <div className="divchannel-tab">
            <div className="social-icons4">
              <img className="vector-icon3" alt="" src="/facebook-icon.png" />
            </div>
            <div className="inboxes">Facebook</div>
          </div>
          <div className="divchannel-tab">
            <div className="social-icons5">
              <img className="shape-icon" alt="" src="/group@2x.png" />
            </div>
            <div className="inboxes">Instagram</div>
          </div>
          <div className="divchannel-tab">
            <img className="social-icons6" alt="" src="/socialicons@2x.png" />
            <div className="inboxes">E-mail</div>
            <div className="divbadge4">
              <div className="div3">199</div>
            </div>
          </div>
        </div>
        <div className="divconversations-tabs">
          <div className="divsection-header">
            <div className="inboxes">Teams</div>
            <div className="message-count">
              <div className="o" />
              <div className="div5">24</div>
            </div>
            <img className="other-icons" alt="" src="/add-new-icon.png" />
          </div>
          <div className="divchannel-tab">
            <div className="inboxes">Arabic Team</div>
            <div className="divbadge2">
              <div className="div3">25</div>
            </div>
          </div>
          <div className="divchannel-tab">
            <div className="inboxes">English only Team</div>
            <div className="divbadge2">
              <div className="div3">18</div>
            </div>
          </div>
          <div className="divchannel-tab7">
            <div className="inboxes">Arabic and English</div>
          </div>
        </div>
        <div className="divconversations-tabs">
          <div className="divsection-header">
            <div className="inboxes">Smart Folder</div>
            <div className="message-count">
              <div className="o" />
              <div className="div5">24</div>
            </div>
            <img className="other-icons" alt="" src="/add-new-icon.png" />
          </div>
          <div className="divchannel-tab">
            <div className="inboxes">SLA Warring</div>
            <div className="div8">⚠️</div>
          </div>
          <div className="divchannel-tab">
            <div className="inboxes">SLA Missed</div>
            <div className="div8">🔥️</div>
          </div>
          <div className="divchannel-tab7">
            <div className="inboxes">All Assigned</div>
          </div>
          <div className="divchannel-tab7">
            <div className="inboxes">All Pending</div>
          </div>
          <div className="divchannel-tab7">
            <div className="inboxes">Assigned to Bot</div>
          </div>
        </div>
      </div>
      <div className="divconversation-container">
        <div className="search-bar">
          <img className="light-icon" alt="" src="/search-icon@2x.png" />
          <input
            className="text-input"
            name="searc"
            placeholder="Search for Conversation"
            type="text"
            value={textInputValue}
            onChange={(event) => setTextInputValue(event.target.value)}
          />
          <img className="light-icon" alt="" src="/filter-icon@2x.png" />
          <div className="sort-icon">
            <img className="shape-icon1" alt="" src="/sort_icon.png" />
          </div>
        </div>
        <div className="tab">
          <div className="tab-item">
            <div className="reply">Mine</div>
            <div className="twitter-original">
              <div className="div3">6</div>
            </div>
          </div>
          <div className="tab-item1">
            <div className="text34">Pending</div>
            <div className="twitter-original1">
              <div className="div3">12</div>
            </div>
          </div>
          <div className="divincoming-channel-name">
            <div className="text34">Closed</div>
          </div>
          <div className="divincoming-channel-name">
            <div className="text34">All</div>
          </div>
        </div>
        <div className="divmessages-container" id="messages-container">
          <div className="divmessage-preview">
            <div className="col4">
              <div className="divmessage-avatar2">
                <div className="create-new">
                  <img className="image-6-icon5" alt="" src="/image-6@2x.png" />
                </div>
              </div>
              <input className="checkbox2" type="checkbox" />
            </div>
            <div className="col5">
              <div className="tag-parent">
                <div className="divename-username2">
                  <div className="name">Ahmed bin Said</div>
                  <div className="text38">@ahmed_48d</div>
                </div>
                <div className="divsocial-container2">
                  <div className="social-icons2">
                    <img className="vector-icon2" alt="" src="/vector@2x.png" />
                  </div>
                  <div className="divbadge7">
                    <div className="div3">4</div>
                  </div>
                </div>
              </div>
              <div className="row5">
                <div className="divmessage-content2">
                  <div className="text40">
                    إلى جانب هذا، يجب أن تهتم أيضًا بجمع نما..
                  </div>
                  <div className="divtime-watchin-container2">
                    <div className="divwatching2">
                      <div className="divwatching-avatars2">
                        <div className="avatars10">
                          <img
                            className="image-6-icon5"
                            alt=""
                            src="/image-10@2x.png"
                          />
                        </div>
                        <div className="avatars11">
                          <img
                            className="image-6-icon5"
                            alt=""
                            src="/facesavtar03@2x.png"
                          />
                        </div>
                        <div className="avatars11">
                          <img
                            className="image-6-icon5"
                            alt=""
                            src="/image-6@2x.png"
                          />
                        </div>
                      </div>
                      <div className="help">Watching</div>
                    </div>
                    <div className="divtime2">
                      <div className="help">1 min</div>
                      <div className="div12">⚠️</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divmessage-preview1">
            <div className="col4">
              <div className="divmessage-avatar3">
                <div className="help">س</div>
              </div>
              <input className="checkbox2" type="checkbox" />
            </div>
            <div className="col7">
              <div className="tag-parent">
                <div className="divename-username2">
                  <div className="name">سارة عبد الرحمن</div>
                  <div className="text38">+201021011542</div>
                </div>
                <div className="divsocial-container2">
                  <div className="social-icons3">
                    <img className="shape-icon" alt="" src="/shape@2x.png" />
                  </div>
                  <div className="divbadge8">
                    <div className="div3">4</div>
                  </div>
                </div>
              </div>
              <div className="row5">
                <div className="divmessage-content2">
                  <div className="text40">نعم</div>
                  <div className="divtime-watchin-container2">
                    <div className="divwatching2">
                      <div className="divwatching-avatars2">
                        <div className="avatars10">
                          <img
                            className="image-6-icon5"
                            alt=""
                            src="/image-10@2x.png"
                          />
                        </div>
                        <div className="avatars11">
                          <img
                            className="image-6-icon5"
                            alt=""
                            src="/facesavtar03@2x.png"
                          />
                        </div>
                        <div className="avatars15">
                          <img
                            className="image-6-icon5"
                            alt=""
                            src="/image-6@2x.png"
                          />
                        </div>
                      </div>
                      <div className="help">Watching</div>
                    </div>
                    <div className="divtime2">
                      <div className="help">13 min</div>
                      <div className="div14">⚠️</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divmessage-preview2">
            <div className="col4">
              <div className="divmessage-avatar3">
                <div className="product">TA</div>
              </div>
              <input className="checkbox2" type="checkbox" />
            </div>
            <div className="col9">
              <div className="tag-parent">
                <div className="divename-username2">
                  <div className="name">Taif Al-Amri</div>
                  <div className="text38">@roro_abd2547</div>
                </div>
                <div className="divsocial-container2">
                  <div className="social-icons4">
                    <img className="vector-icon3" alt="" src="/vector@2x.png" />
                  </div>
                  <div className="divbadge8">
                    <div className="div3">1</div>
                  </div>
                </div>
              </div>
              <div className="row9">
                <div className="divmessage-content2">
                  <div className="text40">
                    So by colonel hearted ferrars. Draw fr..
                  </div>
                  <div className="divtime-watchin-container4">
                    <div className="divwatching4">
                      <div className="divwatching-avatars2">
                        <div className="avatars10">
                          <img
                            className="image-6-icon5"
                            alt=""
                            src="/image-10@2x.png"
                          />
                        </div>
                        <div className="avatars15">
                          <img
                            className="image-6-icon5"
                            alt=""
                            src="/facesavtar03@2x.png"
                          />
                        </div>
                        <div className="avatars15">
                          <img
                            className="image-6-icon5"
                            alt=""
                            src="/image-6@2x.png"
                          />
                        </div>
                      </div>
                      <div className="help">Mohammed is replying...</div>
                    </div>
                    <div className="divtime2">
                      <div className="help">7 min</div>
                      <div className="div14">⚠️</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divmessage-preview2">
            <div className="col4">
              <div className="divmessage-avatar3">
                <div className="product">AS</div>
              </div>
              <input className="checkbox2" type="checkbox" />
            </div>
            <div className="col9">
              <div className="tag-parent">
                <div className="divename-username2">
                  <div className="name">Ahmed bin Said</div>
                  <div className="text38">@ahmed_bin</div>
                </div>
                <div className="divsocial-container2">
                  <div className="social-icons5">
                    <img className="shape-icon" alt="" src="/group@2x.png" />
                  </div>
                  <div className="divbadge8">
                    <div className="div3">4</div>
                  </div>
                </div>
              </div>
              <div className="row9">
                <div className="divmessage-content2">
                  <div className="text40">i need some help please???</div>
                  <div className="divtime-watchin-container5">
                    <div className="divwatching2">
                      <div className="divwatching-avatars2">
                        <div className="avatars15">
                          <img
                            className="image-6-icon5"
                            alt=""
                            src="/image-10@2x.png"
                          />
                        </div>
                        <div className="avatars15">
                          <img
                            className="image-6-icon5"
                            alt=""
                            src="/facesavtar03@2x.png"
                          />
                        </div>
                        <div className="avatars10">
                          <img
                            className="image-6-icon5"
                            alt=""
                            src="/image-6@2x.png"
                          />
                        </div>
                      </div>
                      <div className="help">Watching</div>
                    </div>
                    <div className="divtime2">
                      <div className="help">3 hours 2 min</div>
                      <div className="div14">🔥</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divunassigned-tab">
          <div className="divunassigned-container">
            <div className="text61">Unassigned</div>
            <div className="badge2">
              <div className="div3">24</div>
            </div>
            <div className="divwaiting-time">
              <div className="dot" />
              <div className="text63">45 min</div>
            </div>
          </div>
          <div className="buttonoutlined-text">
            <div className="text64">Claim</div>
          </div>
        </div>
      </div>
      <div className="divconversation-container1">
        <div className="divmessage-action-header">
          <div className="divconversation-id-container">
            <div className="help">Conversation ID#</div>
            <div className="text66">#25685</div>
          </div>
          <div className="divconversation-actions">
            <img className="other-icons" alt="" src="/reply.png" />
            <img className="other-icons" alt="" src="/snooze.png" />
            <img className="other-icons" alt="" src="/view.png" />
            <img className="other-icons" alt="" src="/timer.png" />
          </div>
        </div>
        <div className="divconversation-content">
          <div className="divcustomer-reply-message">
            <div className="divuser-image">
              <div className="divmessage-avatar2">
                <div className="create-new">
                  <img className="image-6-icon5" alt="" src="/image-6@2x.png" />
                </div>
              </div>
            </div>
            <div className="divmessage-container">
              <div className="divuser-name-time-sentement">
                <div className="divuser-name-time">
                  <div className="divuser-name">
                    <div className="div3">Ahmed bin Said</div>
                    <div className="text38">@ahmed_48d</div>
                  </div>
                  <div className="text69">1 min</div>
                </div>
                <div className="sentement">
                  <img
                    className="shape-icon"
                    alt=""
                    src="/sentiment-very-dissatisfied@2x.png"
                  />
                  <img
                    className="shape-icon"
                    alt=""
                    src="/sentiment-neutral@2x.png"
                  />
                  <img
                    className="shape-icon"
                    alt=""
                    src="/sentiment-very-satisfied@2x.png"
                  />
                </div>
              </div>
              <div className="divmessage-content6">
                <div className="divmessage">
                  إلى جانب هذا، يجب أن تهتم أيضًا بجمع نماذج بمواصفات خاصة، تلك
                  التي تُعزز من جودة تواصلك مع العملاء وتُظهر اهتمامك بهم، ومن
                  أهم مواصفات رسائل الدعم الفني الناجحة
                </div>
                <div className="divchannelname-tags-actions">
                  <div className="divincoming-channel-name">
                    <div className="inboxes">DM To @alt_care</div>
                  </div>
                  <div className="divmessage-tags-actions">
                    <div className="sentement">
                      <div className="tag">
                        <div className="help">help</div>
                      </div>
                      <div className="tag">
                        <div className="help">services</div>
                      </div>
                      <div className="add-tag">
                        <img
                          className="other-icons"
                          alt=""
                          src="/add-tag.png"
                        />
                      </div>
                      <div className="tag2">
                        <div className="text63">Other</div>
                      </div>
                    </div>
                    <div className="divmessage-actions">
                      <img
                        className="other-icons"
                        alt=""
                        src="/reply-icon.png"
                      />
                      <img
                        className="other-icons"
                        alt=""
                        src="/open-source-icon.png"
                      />
                      <img
                        className="other-icons"
                        alt=""
                        src="/more-icon.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divagent-reply-message">
            <div className="divmessage-container1">
              <div className="divincoming-channel-name">
                <div className="divuser-name-time">
                  <div className="divuser-name1">
                    <div className="div3">Ahmed bin Said</div>
                  </div>
                  <div className="text69">1 min</div>
                </div>
              </div>
              <div className="divmessage-content7">
                <div className="divmessage1">
                  Another journey chamber way yet females man. Way extensive and
                  dejection get delivered deficient sincerity gentleman age.
                </div>
                <div className="divchannelname-tags-actions1">
                  <div className="divincoming-channel-name">
                    <div className="text73">DM To @alt_care</div>
                  </div>
                  <div className="divincoming-channel-name">
                  <div className="divmessage-actions">
                      <img
                        className="other-icons"
                        alt=""
                        src="/agent-open-source.png"
                      />
                      <img
                        className="other-icons"
                        alt=""
                        src="/agent-more-icon.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divuser-image">
              <div className="divuser-thumbnail-box1">
                <img
                  className="unnamedpng-icon1"
                  alt=""
                  src="/unnamedpng@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="divcustomer-reply-message1">
            <div className="divuser-image">
              <div className="divmessage-avatar2">
                <div className="create-new">
                  <img className="image-6-icon5" alt="" src="/image-6@2x.png" />
                </div>
              </div>
            </div>
            <div className="divmessage-container2">
              <div className="divuser-name-time-sentement">
                <div className="divuser-name-time">
                  <div className="divuser-name">
                    <div className="div3">Ahmed bin Said</div>
                    <div className="text38">@ahmed_48d</div>
                  </div>
                  <div className="text69">1 min</div>
                </div>
                <div className="sentement">
                  <img
                    className="shape-icon"
                    alt=""
                    src="/sentiment-very-dissatisfied@2x.png"
                  />
                  <img
                    className="shape-icon"
                    alt=""
                    src="/sentiment-neutral@2x.png"
                  />
                  <img
                    className="shape-icon"
                    alt=""
                    src="/sentiment-very-satisfied@2x.png"
                  />
                </div>
              </div>
              <div className="divmessage-content6">
                <div className="divmessage">
                  إلى جانب هذا، يجب أن تهتم أيضًا بجمع نماذج بمواصفات خاصة، تلك
                  التي تُعزز من جودة تواصلك مع العملاء وتُظهر اهتمامك بهم، ومن
                  أهم مواصفات رسائل الدعم الفني الناجحة
                </div>
                <div className="divchannelname-tags-actions">
                  <div className="divincoming-channel-name">
                    <div className="inboxes">DM To @alt_care</div>
                  </div>
                  <div className="divmessage-tags-actions">
                    <div className="sentement">
                      <div className="tag">
                        <div className="help">help</div>
                      </div>
                      <div className="tag">
                        <div className="help">services</div>
                      </div>
                      <div className="add-tag">
                        <img
                          className="other-icons"
                          alt=""
                          src="/add-tag.png"
                        />
                      </div>
                      <div className="tag2">
                        <div className="text63">Other</div>
                      </div>
                    </div>
                    <div className="divmessage-actions">
                      <img
                        className="other-icons"
                        alt=""
                        src="/reply-icon.png"
                      />
                      <img
                        className="other-icons"
                        alt=""
                        src="/open-source-icon.png"
                      />
                      <img
                        className="other-icons"
                        alt=""
                        src="/more-icon.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divreply-box">
          <div className="divreply-options">
            <div className="tab1">
              <div className="frame-parent">
                <div className="reply-parent">
                  <div className="reply">{`Reply `}</div>
                  <img
                    className="selection-icon"
                    alt=""
                    src="/selection@2x.png"
                  />
                </div>
                <div className="message-count-wrapper">
                  <div className="message-count3">
                    <div className="o" />
                    <div className="div5">3</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab2">
              <div className="note">Note</div>
              <div className="message-count">
                <div className="o" />
                <div className="div5">3</div>
              </div>
            </div>
            <div className="tab2">
              <div className="note">Close</div>
              <div className="message-count">
                <div className="o" />
                <div className="div5">3</div>
              </div>
            </div>
          </div>
          <div className="divtext-box">
            <div className="wrapper-divtext-line">
              <input
                className="divtext-line"
                value={divtextLineValue}
                placeholder="Write your reply here ... start with / to use canned response"
                type="text"
                onChange={(event) => setDivtextLineValue(event.target.value)}
              />
              {/* <div className="quick-response-icon">
                <div className="note">/</div>
              </div> */}
            </div>
          </div>
          <div className="divtext-option-send">
            <div className="divtext-options">
              <div className="button1">
                <img className="a-icon" alt="" src="/a@2x.png" />
              </div>
              <div className="button1">
                <img
                  className="curved-emote-smile"
                  alt=""
                  src="/curved--emotesmile@2x.png"
                />
              </div>
              <div className="button1">
                <img
                  className="shape-icon"
                  alt=""
                  src="/outline--image1@2x.png"
                />
              </div>
              <div className="button1">
                <img
                  className="shape-icon"
                  alt=""
                  src="/outline--image1@2x.png"
                />
              </div>
              <div className="button1">
                <img
                  className="shape-icon"
                  alt=""
                  src="/outline--microphone@2x.png"
                />
              </div>
              <div className="spanfile-uploads">
                <div className="button1">
                  <img
                    className="curved-emote-smile"
                    alt=""
                    src="/outline--attachment@2x.png"
                  />
                </div>
              </div>
              <div className="spanfile-uploads">
                <div className="button1">
                  <img
                    className="curved-emote-smile"
                    alt=""
                    src="/outline--listpointers@2x.png"
                  />
                </div>
              </div>
              <div className="divh2d-13cf7b6d">
                <div className="divrelative">
                  <div className="button1">
                    <div className="text-editor">
                      <img
                        className="svgrepo-iconcarrier"
                        alt=""
                        src="/svgrepo-iconcarrier@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="button9">
              <div className="div3">Send</div>
            </div>
          </div>
        </div>
      </div>
      <div className="divuser-profile-info">
        <div className="divcontacts-header">
          <div className="icon-container">
            <img
              className="light-icon"
              alt=""
              src="/newconversationicon@2x.png"
            />
          </div>
          <div className="icon-container">
            <img className="light-icon" alt="" src="/mergecontacticon@2x.png" />
          </div>
          <div className="icon-container">
            <img className="light-icon" alt="" src="/newticketicon@2x.png" />
          </div>
          <div className="icon-container">
            <img className="light-icon" alt="" src="/editcontacticon@2x.png" />
          </div>
          <div className="icon-container">
            <img
              className="line-duotone-time-history"
              alt=""
              src="/opencontacticon@2x.png"
            />
          </div>
        </div>
        <div className="divuser-profile">
          <div className="divuser-container">
            <div className="divprofile-avatar">
              <div className="divmessage-avatar8">
                <div className="create-new">
                  <img className="image-6-icon5" alt="" src="/image-6@2x.png" />
                </div>
              </div>
              <img className="gender-icon" alt="" src="/gendericon@2x.png" />
            </div>
            <div className="divprofile-info">
              <div className="name">Ahmed bin Said</div>
              <div className="address">
                23 شارع ابن المهاجر ,امام مشويات الأطلال ,الرمال ,الجبيل -
                الطابق الخامس - شقة 53
              </div>
            </div>
          </div>
          <div className="tag-parent">
            <div className="tag8">
              <div className="product">Product</div>
            </div>
            <div className="tag8">
              <div className="product">Sales</div>
            </div>
            <div className="tag10">
              <div className="help">عميل مميز</div>
            </div>
            <img className="curved-plus" alt="" src="/add-tag@2x.png" />
          </div>
          <div className="divuser-contacts">
            <div className="divuser-phone">
              <div className="icon-container">
                <img className="phone-icon" alt="" src="/phone-icon@2x.png" />
              </div>
              <input
                className="phone-number"
                placeholder="Add Customer Number"
                type="number"
                value={phoneNumberValue}
                onChange={(event) => setPhoneNumberValue(event.target.value)}
              />
            </div>
            <div className="divuser-phone">
              <div className="icon-container">
                <img className="phone-icon" alt="" src="/mail-icon@2x.png" />
              </div>
              <div className="product">nasser-aljuhlan@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="divnote-container">
          <div className="divnote-header">
            <div className="product">Pinned Note</div>
          </div>
          <div className="divnote-content">
            <div className="account-has-been">{`Account Has been Freeze due to fraud activity `}</div>
            <div className="by-eissa-al-khalidi">By Eissa Al-Khalidi</div>
          </div>
        </div>
        <div className="divcustomer-social-profiles" id="social-profiles">
          <div className="divsection-header3">
            <div className="inboxes">Social Profiles</div>
            <img className="social-icons6" alt="" src="/othericons@2x.png" />
          </div>
          <div className="divprofile-container">
            <div className="divsocial-link">
              <div className="icon-container7">
                <div className="social-icons11">
                  <img className="vector-icon3" alt="" src="/vector@2x.png" />
                </div>
              </div>
              <div className="divsocial-info">
                <div className="help">@ahmed_48d</div>
                <div className="divfollowers-line">
                  <b className="help">
                    <span>{`128 `}</span>
                    <span className="following">Posts</span>
                  </b>
                  <b className="help">
                    <span>{`1.2k `}</span>
                    <span className="following">Following</span>
                  </b>
                  <b className="help">
                    <span>{`2,1K `}</span>
                    <span className="following">Followers</span>
                  </b>
                </div>
              </div>
            </div>
            <div className="divuser-phone">
              <div className="icon-container8">
                <div className="social-icons12">
                  <img className="vector-icon2" alt="" src="/vector@2x.png" />
                </div>
              </div>
              <div className="divsocial-info1">
                <div className="help">@ahm7_0208</div>
                <div className="divfollowers-line1">
                  <b className="help">
                    <span>{`128 `}</span>
                    <span className="following">Tweets</span>
                  </b>
                  <b className="help">
                    <span>{`799 `}</span>
                    <span className="following">Following</span>
                  </b>
                  <b className="help">
                    <span>{`3,7K `}</span>
                    <span className="following">Followers</span>
                  </b>
                </div>
              </div>
            </div>
            <div className="divadd-new">
              <img className="svg-icon" alt="" src="/svg@2x.png" />
              <div className="divuser-name-time">
                <div className="add-social-account">Add Social account</div>
              </div>
            </div>
          </div>
        </div>
        <div className="divcustomer-previous-conversa">
          <div className="divsection-header3">
            <div className="inboxes">{`Previous Conversation `}</div>
            <img className="social-icons6" alt="" src="/othericons@2x.png" />
          </div>
          <div className="divprev-conversation-containe">
            <b className="today-dec-13">Today, Dec 13, 2023</b>
            <div className="divprev-conv-item">
              <img
                className="divhistory-line-icon"
                alt=""
                src="/divhistoryline@2x.png"
              />
              <div className="col5">
                <div className="tag-parent">
                  <div className="divename-username6">
                    <div className="name">Ahmed bin Said</div>
                    <div className="text38">+966551418354</div>
                  </div>
                  <div className="divsocial-container6">
                    <div className="social-icons3">
                      <img className="shape-icon" alt="" src="/shape@2x.png" />
                    </div>
                    <div className="divbadge7">
                      <div className="div3">4</div>
                    </div>
                    <div className="text83">Ticket Escalated</div>
                  </div>
                </div>
                <div className="row9">
                  <div className="divmessage-content2">
                    <div className="text40">{`Extended kindness trifling remember he confined outlived if. Assistance sentime... `}</div>
                    <div className="divtime-watchin-container5">
                      <div className="divwatching6">
                        <div className="divwatching-avatars2">
                          <div className="avatars10">
                            <img
                              className="image-6-icon5"
                              alt=""
                              src="/image-10@2x.png"
                            />
                          </div>
                          <div className="avatars15">
                            <img
                              className="image-6-icon5"
                              alt=""
                              src="/facesavtar03@2x.png"
                            />
                          </div>
                          <div className="avatars15">
                            <img
                              className="image-6-icon5"
                              alt=""
                              src="/image-6@2x.png"
                            />
                          </div>
                        </div>
                        <div className="help">Hafiz Ahmed</div>
                      </div>
                      <div className="divtime2">
                        <div className="help">2:35 PM - 25 Oct 2022</div>
                        <div className="div12">⚠️</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divprev-conv-item1">
              <img
                className="divhistory-line-icon"
                alt=""
                src="/divhistoryline@2x.png"
              />
              <div className="col5">
                <div className="tag-parent">
                  <div className="divename-username6">
                    <div className="name">Ahmed bin Said</div>
                    <div className="text38">mail@mail.com</div>
                  </div>
                  <div className="divsocial-container6">
                    <img
                      className="social-icons6"
                      alt=""
                      src="/socialicons@2x.png"
                    />
                    <div className="divbadge7">
                      <div className="div3">4</div>
                    </div>
                    <div className="text83">Ticket Escalated</div>
                  </div>
                </div>
                <div className="row9">
                  <div className="divmessage-content2">
                    <div className="text40">{`Extended kindness trifling remember he confined outlived if. Assistance sentime... `}</div>
                    <div className="divtime-watchin-container5">
                      <div className="divwatching6">
                        <div className="divwatching-avatars2">
                          <div className="avatars10">
                            <img
                              className="image-6-icon5"
                              alt=""
                              src="/image-10@2x.png"
                            />
                          </div>
                          <div className="avatars15">
                            <img
                              className="image-6-icon5"
                              alt=""
                              src="/facesavtar03@2x.png"
                            />
                          </div>
                          <div className="avatars15">
                            <img
                              className="image-6-icon5"
                              alt=""
                              src="/image-6@2x.png"
                            />
                          </div>
                        </div>
                        <div className="help">Hafiz Ahmed</div>
                      </div>
                      <div className="divtime2">
                        <div className="help">2:35 PM - 25 Oct 2022</div>
                        <div className="div12">⚠️</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <b className="today-dec-13">Dec 16, 2023</b>
            <div className="divprev-conv-item2">
              <img
                className="divhistory-line-icon"
                alt=""
                src="/divhistoryline@2x.png"
              />
              <div className="col5">
                <div className="tag-parent">
                  <div className="divename-username6">
                    <div className="name">Ahmed bin Said</div>
                    <div className="text38">+966551418354</div>
                  </div>
                  <div className="divsocial-container6">
                    <div className="social-icons3">
                      <img className="shape-icon" alt="" src="/shape@2x.png" />
                    </div>
                    <div className="divbadge7">
                      <div className="div3">4</div>
                    </div>
                    <div className="text83">Ticket Escalated</div>
                  </div>
                </div>
                <div className="row9">
                  <div className="divmessage-content2">
                    <div className="text40">{`Extended kindness trifling remember he confined outlived if. Assistance sentime... `}</div>
                    <div className="divtime-watchin-container5">
                      <div className="divwatching6">
                        <div className="divwatching-avatars2">
                          <div className="avatars10">
                            <img
                              className="image-6-icon5"
                              alt=""
                              src="/image-10@2x.png"
                            />
                          </div>
                          <div className="avatars15">
                            <img
                              className="image-6-icon5"
                              alt=""
                              src="/facesavtar03@2x.png"
                            />
                          </div>
                          <div className="avatars15">
                            <img
                              className="image-6-icon5"
                              alt=""
                              src="/image-6@2x.png"
                            />
                          </div>
                        </div>
                        <div className="help">Hafiz Ahmed</div>
                      </div>
                      <div className="divtime2">
                        <div className="help">2:35 PM - 25 Oct 2022</div>
                        <div className="div12">⚠️</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divsystem-sidebar">
        <div className="sidebar-item">
          <img className="light-icon" alt="" src="/icon@2x.png" />
        </div>
        <div className="sidebar-item1">
          <img
            className="light-icon"
            alt=""
            src="/knowledge-base-icon@2x.png"
          />
        </div>
        <div className="sidebar-item1">
          <img className="light-icon" alt="" src="/quickresponseicon@2x.png" />
        </div>
        <div className="sidebar-item1">
          <img className="light-icon" alt="" src="/icon@2x.png" />
        </div>
        <div className="sidebar-item1">
          <img
            className="line-duotone-time-history"
            alt=""
            src="/notesicon@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
