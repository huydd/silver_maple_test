import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './home.style';
import Header from '../../components/header/header.component';
import BaseText from '../../components/baseText/text.component';
import InputComment from '../../components/inputComment/input-comment.component';
import UpgradeAccount from './components/upgradeAccount/upgrade-account.component';
import Footer from '../../components/footer/footer.component';
import ContentMenu from './components/contentMenu/content-menu.component';

import {
  iconComment,
  iconDonate,
  iconDown,
  iconForward,
  iconLike,
  iconTicket,
  imgAvatar1,
  imgAvatar3,
} from '../../../assets/images';

import articleData from '../../utils/article.data.json';
import moreCommentsData from '../../utils/more-comment.data.json';

interface IArticle {
  id: number;
  title: string;
  content: string[];
}

interface IComment {
  id: number;
  author: string;
  content: string;
  createdAt: string;
  likes: number;
}

const Home = () => {
  // @ts-ignore
  const [articles, setArticles] = useState<IArticle[]>([articleData]);
  const [articleSelected, setArticleSelected] = useState<IArticle>();
  const [moreComments, setMoreComments] = useState<IComment[]>([]);
  const [indexReplyComment, setIndexReplyComment] = useState<number | null>();
  const [tagAuthor, setTagAuthor] = useState<object>({
    articleId: null,
    author: '',
  });
  const [replyParent, setReplyParent] = useState<boolean>(false);
  const [contentMenuIndexVisible, setContentIndexMenuVisible] = useState<any>();

  const clickOut = () => {
    Keyboard.dismiss();
    if (contentMenuIndexVisible) setContentIndexMenuVisible(null);
  };

  const doExpandComment = () => {
    setMoreComments((prevComments: any) => [
      ...prevComments,
      ...moreCommentsData,
    ]);
  };

  const doLoadMore = async () => {
    if (articles.length < 2) {
      setTimeout(() => {
        setArticles((prevArticles: IArticle[]) => [
          ...prevArticles,
          {
            ...articleData,
            id: prevArticles[prevArticles.length - 1].id + 1,
          },
        ]);
      }, 2000);
    }
  };

  const doReplyParent = (article: IArticle) => () => {
    setArticleSelected(article);
    setIndexReplyComment(null);
    setTagAuthor({
      articleId: article.id,
      author: 'Martin Dias',
    });
    setReplyParent(!!true);
  };

  const doReply =
    (article: IArticle, index: number, comment: IComment) => () => {
      setArticleSelected(article);
      setReplyParent(false);
      setIndexReplyComment(index);
      setTagAuthor({
        articleId: article.id,
        author: comment.author,
      });
    };

  const doSelectContentArticle = (article: IArticle) => () => {
    setArticleSelected(article);
    setContentIndexMenuVisible(null);
  };

  const doShowContentMenu = (article: IArticle, indexContent: number) => () => {
    setArticleSelected(article);
    setContentIndexMenuVisible(indexContent);
  };

  const renderItem = (item: any) => {
    const article: IArticle = item.item;
    return (
      <View style={styles.item}>
        <View style={styles.title}>
          <Text style={styles.txtTitle}>{article.title}</Text>
          <View style={styles.countComment}>
            <Text style={styles.numberComment}>2,356</Text>
            <Image
              source={iconComment}
              style={{width: 16, height: 16}}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.contentArticle}>
          {article.content.map((itemContent: string, index: number) => (
            <View key={index}>
              {article.id === articleSelected?.id &&
                contentMenuIndexVisible === index && (
                  <View style={[styles.boxContentMenu]}>
                    <ContentMenu />
                  </View>
                )}
              <TouchableOpacity
                onPress={doSelectContentArticle(article)}
                onLongPress={doShowContentMenu(article, index)}>
                <Text style={styles.txtContent}>{itemContent}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <TouchableWithoutFeedback>
          <View style={styles.comment}>
            <View style={styles.headerComment}>
              <View style={styles.inRow}>
                <Image
                  source={iconDonate}
                  style={{width: 20, height: 20}}
                  resizeMode="contain"
                />
                <BaseText
                  size={14}
                  lineHeight={16}
                  color="#528AFF"
                  fontWeight={'700'}>
                  Ủng hộ tác giả
                </BaseText>
              </View>
              <View style={styles.inRow}>
                <Image
                  source={iconTicket}
                  style={{width: 32, height: 20}}
                  resizeMode="contain"
                />
                <BaseText
                  size={14}
                  lineHeight={16}
                  color="#E8B80E"
                  fontWeight={'700'}>
                  12
                </BaseText>
                <Image
                  source={iconForward}
                  style={{width: 20, height: 20}}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={styles.divider} />
            <View
              style={[
                styles.contentComment,
                articleSelected?.id === article.id &&
                  replyParent &&
                  styles.activeReplyComment,
              ]}>
              <Image
                source={imgAvatar1}
                style={{width: 32, height: 32}}
                resizeMode="contain"
              />
              <View style={styles.rightComment}>
                <BaseText
                  size={14}
                  lineHeight={16}
                  color="#303030"
                  fontWeight={'700'}>
                  Martin Dias
                </BaseText>
                <View style={styles.boxComment}>
                  <BaseText
                    size={12}
                    lineHeight={14}
                    color="#303030"
                    fontWeight={'400'}>
                    Tôi cảm thấy tôi viết còn hay hơn tác giả này ấy. Đầu voi
                    đuôi chuột dễ sợ. Đọc tới đây thì muốn bỏ luôn, ko đọc nữa
                    cho đỡ tốn thời gian. Demo 3 dòng...{' '}
                    <BaseText
                      size={12}
                      lineHeight={14}
                      color="#528AFF"
                      fontWeight={'700'}>
                      Xem thêm
                    </BaseText>
                  </BaseText>
                </View>
                <View style={styles.inRow}>
                  <View style={styles.inRow}>
                    <Image
                      source={iconLike}
                      style={{width: 16, height: 16}}
                      resizeMode="contain"
                    />
                    <BaseText
                      size={10}
                      lineHeight={12}
                      color="#B5B5B5"
                      fontWeight={'500'}>
                      234
                    </BaseText>
                  </View>
                  <TouchableOpacity onPress={doReplyParent(article)}>
                    <BaseText
                      size={12}
                      lineHeight={14}
                      color="#528AFF"
                      fontWeight={'700'}>
                      Phản hồi
                    </BaseText>
                  </TouchableOpacity>
                  <BaseText
                    size={10}
                    lineHeight={12}
                    color="#909090"
                    fontWeight={'500'}>
                    2 tháng trước
                  </BaseText>
                  <BaseText
                    size={10}
                    lineHeight={12}
                    color="#DA4936"
                    fontWeight={'500'}>
                    Báo cáo
                  </BaseText>
                </View>
                {moreComments.map((itemComment: IComment, index: number) => (
                  <View key={index} style={styles.replyComments}>
                    <View
                      style={[
                        styles.contentComment,
                        articleSelected?.id === article.id &&
                          index === indexReplyComment &&
                          styles.activeReplyComment,
                      ]}>
                      <Image
                        source={imgAvatar3}
                        style={{width: 24, height: 24}}
                        resizeMode="contain"
                      />
                      <View style={styles.rightComment}>
                        <BaseText
                          size={14}
                          lineHeight={16}
                          color="#303030"
                          fontWeight={'700'}>
                          {itemComment.author}
                        </BaseText>
                        <View style={styles.boxComment}>
                          <BaseText
                            size={12}
                            lineHeight={14}
                            color="#303030"
                            fontWeight={'400'}>
                            {itemComment.content}
                          </BaseText>
                        </View>
                        <View style={styles.inRow}>
                          <View style={styles.inRow}>
                            <Image
                              source={iconLike}
                              style={{width: 16, height: 16}}
                              resizeMode="contain"
                            />
                            <BaseText
                              size={10}
                              lineHeight={12}
                              color="#B5B5B5"
                              fontWeight={'500'}>
                              {itemComment.likes}
                            </BaseText>
                          </View>
                          <TouchableOpacity
                            onPress={doReply(article, index, itemComment)}>
                            <BaseText
                              size={12}
                              lineHeight={14}
                              color="#528AFF"
                              fontWeight={'700'}>
                              Phản hồi
                            </BaseText>
                          </TouchableOpacity>
                          <BaseText
                            size={10}
                            lineHeight={12}
                            color="#909090"
                            fontWeight={'500'}>
                            {itemComment.createdAt}
                          </BaseText>
                          <BaseText
                            size={10}
                            lineHeight={12}
                            color="#DA4936"
                            fontWeight={'500'}>
                            Báo cáo
                          </BaseText>
                        </View>
                      </View>
                    </View>
                  </View>
                ))}
                <TouchableOpacity onPress={doExpandComment}>
                  <View style={styles.inRow}>
                    <Image
                      source={iconDown}
                      style={{width: 16, height: 16}}
                      resizeMode="contain"
                    />
                    <BaseText
                      size={12}
                      lineHeight={14}
                      color="#528AFF"
                      fontWeight={'500'}>
                      Xem thêm 12 bình luận
                    </BaseText>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.footerComment}>
              <InputComment article={article} tag={tagAuthor} />
              <TouchableOpacity>
                <BaseText
                  size={16}
                  lineHeight={24}
                  color="#D3C6F8"
                  fontWeight={'600'}>
                  Gửi
                </BaseText>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  const renderFooterItem = () => {
    return <UpgradeAccount />;
  };

  return (
    <TouchableWithoutFeedback onPress={clickOut}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.select({ios: 30, android: 30})}
        style={styles.container}>
        <>
          <Header />
          <View style={styles.content}>
            <FlatList
              data={articles}
              renderItem={renderItem}
              onEndReached={doLoadMore}
              onEndReachedThreshold={0.5}
              keyExtractor={(item, index) => String(index)}
              ListFooterComponent={renderFooterItem}
            />
          </View>
          <Footer />
        </>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(Home);
