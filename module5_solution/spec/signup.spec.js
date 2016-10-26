describe('signup tests', function () {
  var $httpBackend
  var ApiPath
  var menuitem
  var menu_item = 'D11'
  var menuItem2 = 'L10'

  beforeEach(function () {
    module('common')

    inject(function ($injector) {
      menuitem = $injector.get('MenuService')
      $httpBackend = $injector.get('$httpBackend')
      ApiPath = $injector.get('ApiPath')
    })
  })
  it('should return menu items', function () {
    $httpBackend.whenGET(ApiPath + '/menu_items.json').respond(['L11', 'D10'])
    menuitem.getMenuItems().then(function (response) {
      expect(response).toEqual(['L11', 'D10'])
    })
    $httpBackend.flush()
  })
  it('menu item does not exist', function () {
    $httpBackend.whenGET(ApiPath + '/menu_items/' + menu_item + '.json').respond([menuItem2])
    menuitem.getMenuItem(menu_item).then(function (response) {
      expect(response).not.toEqual([menu_item])
    })
    $httpBackend.flush()
  })
  it('menu item exists', function () {
    $httpBackend.whenGET(ApiPath + '/menu_items/' + menuItem2 + '.json').respond([menuItem2])
    menuitem.getMenuItem(menuItem2).then(function (response) {
      expect(response).toEqual([menuItem2])
    })
    $httpBackend.flush()
  })
})
