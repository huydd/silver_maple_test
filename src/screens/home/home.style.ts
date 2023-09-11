import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 64,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#303030',
  },
  countComment: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
    backgroundColor: '#F0F0F0',
  },
  numberComment: {
    color: '#B5B5B5',
    fontSize: 12,
    fontWeight: '400',
  },
  item: {
    marginBottom: 16,
  },
  contentArticle: {
    position: 'relative',
    gap: 16,
    paddingTop: 16,
  },
  txtContent: {
    lineHeight: 24,
    fontWeight: '400',
    fontSize: 16,
    color: '#707070',
  },
  comment: {
    padding: 8,
    marginTop: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  headerComment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  inRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  contentComment: {
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 8,
  },
  replyComments: {width: '95%'},
  activeReplyComment: {
    backgroundColor: '#BDBDBD',
    borderRadius: 6,
  },
  rightComment: {
    gap: 8,
  },
  boxComment: {width: '90%'},
  footerComment: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  boxContentMenu: {
    position: 'absolute',
    top: -20,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
